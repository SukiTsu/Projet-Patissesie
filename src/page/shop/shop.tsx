import Navbar from "../../components/navbar";
import ContainerGroupCake from "../../components/containerGroupCake";
import Footer from "../../components/footer";
import manager  from './getData';
import { useState, useEffect, SetStateAction } from "react";
import { JSX } from "react/jsx-runtime";
import ChangeStyleSaison from "../../components/changeStyleSaison";
import SearchBar from "../../components/searchBar";
import { ClassCake } from "../../classCake";
import ContainerCake from "../../components/containerCake";


const Shop =({}) => {
  const [listContainer, setListContainer] = useState<JSX.Element[]>([]);
  const [valueSearchBar, setSearchBar] = useState<string>("");
  const [listCakeSearch, setListCakeSearch] = useState<ClassCake[]>([])
  
  useEffect(() => {
    // Fonction pour remplir listContainer

    console.log("Élément recherché: ", valueSearchBar);

    if (valueSearchBar) {
      const tempsCakeSearch: ClassCake[] = manager.listCake.filter((cake) =>
          cake.title.toLowerCase().includes(valueSearchBar.toLowerCase()) || 
          cake.content.toLowerCase().includes(valueSearchBar.toLowerCase())
      );
  
      setListCakeSearch(tempsCakeSearch);
    } else {
      setListCakeSearch([]);
    }

    async function shop() {
      const tempContainerList: JSX.Element[] = [];

      if (listCakeSearch )
      for (const [categorie, cakes] of manager.categoryMap.entries()) {
        
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

      setListContainer(tempContainerList);
    }
    if (valueSearchBar && listCakeSearch.length > 0){
      let tempsCake = []
      for (const cake of listCakeSearch){
        tempsCake.push(<ContainerCake cake={cake}/>)
      }
      setListContainer(tempsCake)
    }else {
      shop();
    }
      

    if (manager.listCake.length <= 0){
      setListContainer([<div key="error" className="error">
        <p>Il se trouve que notre site a été surchargé, veuillez changer de page ou cliquer sur le bouton Acutaliser. Si le problème persiste, merci de revenir plus tard.</p>
        <button onClick={shop} className="bt actualise">Actualiser</button>
        </div>])
    }
    
    
  }, [valueSearchBar]); // Le tableau vide signifie que useEffect s'exécute une seule fois
    
    return (
      <div>
        <Navbar/>
        <ChangeStyleSaison />
        <div className="content">
          <h2>Voici mes gâteaux classés par catégories</h2>
          <p>Cliquez sur l'un d'entre eux pour afficher une liste de gâteaux de cette catégorie</p>
          <SearchBar inValue={valueSearchBar} method={setSearchBar}/>
          <div className="all-container">
            {listContainer}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default Shop