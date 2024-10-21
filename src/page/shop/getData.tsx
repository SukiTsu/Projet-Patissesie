import { ClassCake } from '../../classCake'
import { extractAndRemoveHashtagsAndBrackets } from './extractWord'
import { useEffect, useState } from 'react'

const token = "EAAMxJHI6qfABO8sPsK1u8kwfZBlJ1UZBMNN1uesIDp6hvUxVci5W25NOUvWnpD6dC7phTyF1joCMZAQ29azAPi7k9MLza9LxnOFE1SlLflt5Ek2TLjs5t2ZCfhr08oN9FtGRXEIlohxoR9Jeqhr5mNNJOjS6PeQ8FAqiZCNdFv0hv6srnEmIZAB9HHopWRQqNu"
const url = `https://graph.facebook.com/v21.0/122096825252577148?fields=id%2Cposts.limit(100)%7Bmessage%2Cfull_picture%7D&access_token=${token}`

export class CategoryManager {
  listCake: ClassCake[] = [];
  categoryMap: Map<string, Set<ClassCake>> = new Map();

  addClassCake(cake: ClassCake): void {
      this.listCake.push(cake);
      for (const category of cake.categories) {
          if (!this.categoryMap.has(category)) {
              this.categoryMap.set(category, new Set());
          }
          this.categoryMap.get(category)!.add(cake);
      }
  }

  // Récupère tous les objets d'une catégorie donnée
  getClassCakesByCategory(category: string): ClassCake[] {
      return this.categoryMap.get(category) ? Array.from(this.categoryMap.get(category)!) : [];
  }

  async fetchData() {
    try {
      const response = await fetch(url);
      //console.log("shearch: ", token)
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error(`Erreur 400: Ressource non trouvée à l'URL ${token}`);
        } else {
          throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
        }
      }
      const dataInsta = await response.json();
      const globalData = dataInsta.posts.data;
  
      for (let i = 0; i < globalData.length; i++) {
        if (globalData[i].full_picture !== undefined && globalData[i].message !== undefined) {
          const tempDescription = globalData[i].message;
          const titleContentHastag = extractAndRemoveHashtagsAndBrackets(tempDescription);
          
          const cake = new ClassCake(titleContentHastag.title[0], globalData[i].full_picture, titleContentHastag.cleanedContent, titleContentHastag.categories);
          manager.addClassCake(cake);
        } else {
          console.log("problème de lien ou de contenu");
        }
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      
    }
  }
}
const manager = new CategoryManager();
export default manager;