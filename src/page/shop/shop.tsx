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
        console.log(categorie, cakes)
        
        if (manager.categoryMap.get(categorie) !== undefined) {
          
          let i = 0
          const iterator = cakes.values()
          let result = iterator.next()
          let tabImg = []

          while (!result.done && i<4) {
            tabImg.push(result.value.imgSrc)
            result = iterator.next()
            i++
          }
          const container = <ContainerGroupCake srcImgs={tabImg} link={categorie} title={categorie}/>
          tempContainerList.push(container)
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
      <div>
        <Navbar/>
        <div className="content">
          <div className="all-container">
            {listContainer}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default Shop