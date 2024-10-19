/*async function fetchData(url: string) {
    try {
      const response = await fetch(url)
      
  
      // Vérification de la réponse, si elle n'est pas OK (status != 200)
      if (!response.ok) {
        // Si le statut est 404, on lance une erreur explicite
        if (response.status === 400) {
          throw new Error(`Erreur 400: Ressource non trouvée à l'URL ${url}`);
        } else {
          throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
        }
      }
  
      const dataInsta = await response.json();
      console.log(dataInsta);
  
    } catch (error) {
      // Ici, on capture et affiche toutes les erreurs (404 et autres)
      console.error('Erreur lors du fetch:', error);
      return("Nous rencontrons un problème avec notre base de données")
    }
  }
  const url = " https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bmedia%7Bid%2Ccaption%2Cmedia_url%2Cpermalink%2Cmedia_type%2Ctimestamp%2Cchildren%7Bmedia_url%7D%7D%7D&access_token=EAAHiSqxOIusBOy05WNZCYmoowdOHzpU8ndkFXPkXWQOXBIyiy4c0TfqhsghDr2LPcpjUPqGZCiEoudwCoZBC4WnbPE7gSWt1lsxURIUNaRvBLRqfLq0mYAb3PjWXy4ZAQaJZBOULoTRZAWzGPyjHjZByLlhPoZAnnIz8HZCGXr4FwIE7pGfjBMZCrhZC6Hk2JEZA9z1ZAZAbmqfJx3CzEsvudBwZCGzSSkkxq1d"
  //const url = `https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bfollowers_count%2Cmedia_count%2Cmedia%7D&access_token=EAAHiSqxOIusBO3Tg7L1gY46gdFIYPFJtmvIlMkFKbe5tPEFheZBZA5AVHQEPWZBJxyoW5S62ZARZCj6Ly5k3DHtBpQNC7qbKN1HItSpyXONMZAs4WcrQIzt8D1V5vxZCMAVzq3FXoxyLmLgemCsUngomDNkJfTpcT8dk2Kdtq0P06Kd3kymtRVwIaw24rGzJcVRLFhn6fM9JBZCl6Nh14P0ZD`
  const Data = fetchData(url);
  */
const HASTAG = ["fanart","dessin"]

import CakeDictionary from '../../dictionaryCake'
import { ClassCake } from '../../classCake'
import { extractAndRemoveHashtagsAndBrackets } from './extractWord'
import { useState } from 'react'
 
const idUser = "17841414994500741"
const id2 = "1307916620619552"
const dictionaryCake = CakeDictionary

//const url = "https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bfollowers_count%2Cmedia_count%2Cmedia%7D&access_token=EAAHiSqxOIusBO3Tg7L1gY46gdFIYPFJtmvIlMkFKbe5tPEFheZBZA5AVHQEPWZBJxyoW5S62ZARZCj6Ly5k3DHtBpQNC7qbKN1HItSpyXONMZAs4WcrQIzt8D1V5vxZCMAVzq3FXoxyLmLgemCsUngomDNkJfTpcT8dk2Kdtq0P06Kd3kymtRVwIaw24rGzJcVRLFhn6fM9JBZCl6Nh14P0ZD"
const token = "EAAMxJHI6qfABO8sPsK1u8kwfZBlJ1UZBMNN1uesIDp6hvUxVci5W25NOUvWnpD6dC7phTyF1joCMZAQ29azAPi7k9MLza9LxnOFE1SlLflt5Ek2TLjs5t2ZCfhr08oN9FtGRXEIlohxoR9Jeqhr5mNNJOjS6PeQ8FAqiZCNdFv0hv6srnEmIZAB9HHopWRQqNu"
//const url = `https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bfollowers_count%2Cmedia_count%2Cmedia%7Bid%2Ccomments_count%2Cmedia_url%7D%7D&access_token=${token}`
//const url =  `https://graph.instagram.com/${idUser}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${token}`

//const url = "https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bmedia%7Bid%2Ccaption%2Cmedia_url%2Cpermalink%2Cchildren%7Bmedia_url%7D%7D%7D&access_token=EAAHiSqxOIusBOZBZBQm5lP5EbPW18QkUWb6mBU4WScMoiHHrfCtOImPXJYXpZALf0Om9WVcZAa8LN5K774scY4f2IWUz84hP5T4MVulWs8x2gxgoDeAZBij5Oax9KUZCN5MBXfMVt48lZA04EZBZAQZARfwN0ajlDuthZAcOGnywupYAFTP3W0ZBNyLsUHVNNkV7kXUwYcZBNNyYnZAhYpb9NXYAZDZD"
const url = `https://graph.facebook.com/v21.0/122096825252577148?fields=id%2Cposts.limit(100)%7Bmessage%2Cfull_picture%7D&access_token=${token}`

/**
 * Extrait une chaine de caractère entre ** **
 * @param text 
 * @returns Chaine de caractère
 */



export class CategoryManager {
  listCake: ClassCake[] = [];
  categoryMap: Map<string, Set<ClassCake>> = new Map();

  // Ajoute un nouvel objet
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