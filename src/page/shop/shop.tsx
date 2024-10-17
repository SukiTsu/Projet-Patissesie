import Navbar from "../../components/navbar";
import dictionaryCake from "./getData";
import ContainerGroupCake from "../../components/containerGroupCake";
import Footer from "../../components/footer";
import manager  from './getData';
import { ReactElement, JSXElementConstructor, ReactNode, useState, useEffect } from "react";
import { JSX } from "react/jsx-runtime";


const Shop =({}) => {
  const [listContainer, setListContainer] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Fonction pour remplir listContainer
    async function shop() {
      const tempContainerList: JSX.Element[] = []; // Créer un tableau temporaire

      for (const [categorie, cakes] of manager.categoryMap.entries()) {
        console.log(categorie, cakes);
        
        if (manager.categoryMap.get(categorie) !== undefined) {
          for (const cake of cakes) {
            const tempCake = cake;
            // Créer un composant pour chaque cake et l'ajouter au tableau temporaire
            const container = (
              <ContainerGroupCake 
                srcImg={tempCake.imgSrc} 
                link={categorie} 
                title={categorie}
              />
            );
            tempContainerList.push(container);
            break; // Break après le premier cake, comme dans votre code original
          }
        }
      }

      // Met à jour listContainer avec les nouveaux éléments
      setListContainer(tempContainerList);
    }

    shop(); // Appeler la fonction après le montage
  }, []); // Le tableau vide signifie que useEffect s'exécute une seule fois
    /*for (const key in dictionaryCake) {
      if (dictionaryCake[key].length === 0) break
      const tempCake = dictionaryCake[key][0]
      const container = <ContainerGroupCake srcImg={tempCake.getImgSrc()} link={key} title={key}/>
      listContainer.push(container)
    }*/
    return (
      <div className="shop-page">
        <Navbar/>
        <div className="all-container">
          {listContainer}
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default Shop