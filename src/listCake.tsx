import { ClassCake } from "./classCake";

class CategoryManager {
    private listCake: ClassCake[] = [];
    private categoryMap: Map<string, Set<ClassCake>> = new Map();
  
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
  
  }
  
  let manager = new CategoryManager();

export default manager