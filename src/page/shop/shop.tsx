import Navbar from "../../components/navbar";
import ContainerGroupCake from "../../components/containerGroupCake";
import Footer from "../../components/footer";
import manager  from './getData';
import { useState, useEffect } from "react";
import { JSX } from "react/jsx-runtime";
import ChangeStyleSaison from "../../components/changeStyleSaison";


const Shop =({}) => {
  const [listContainer, setListContainer] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    // Fonction pour remplir listContainer
    async function shop() {
      const tempContainerList: JSX.Element[] = []; // Créer un tableau temporaire

      for (const [categorie, cakes] of manager.categoryMap.entries()) {
        //console.log(categorie, cakes)
        
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
          const container = <ContainerGroupCake key={categorie} srcImgs={tabImg} link={categorie} title={categorie}/>
          tempContainerList.push(container)
        }
      }

      // Met à jour listContainer avec les nouveaux éléments
      setListContainer(tempContainerList);
    }
    shop(); // Appeler la fonction après le montage
    if (manager.listCake.length <= 0){
      setListContainer([<div key="error" className="error">
        <p>Il se trouve que notre site a été surchargé, veuillez changer de page ou cliquer sur le bouton Acutaliser. Si le problème persiste, merci de revenir plus tard.</p>
        <button onClick={shop} className="bt actualise">Actualiser</button>
        </div>])
    }
    
    
  }, []); // Le tableau vide signifie que useEffect s'exécute une seule fois
    
    return (
      <div>
        <Navbar/>
        <ChangeStyleSaison />
        <div className="content">
          <h2>Voici mes gâteaux classés par catégories</h2>
          <p>Cliquez sur l'un d'entre eux pour afficher une liste de gâteaux de cette catégorie</p>
          <div className="all-container">
            {listContainer}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default Shop