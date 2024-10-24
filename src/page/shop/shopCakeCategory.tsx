import Navbar from "../../components/navbar";
import dictionaryCake from "./getData";
import ContainerCake from "../../components/containerCake";
import Footer from "../../components/footer";
import manager from "./getData";
import ChangeStyleSaison from "../../components/changeStyleSaison";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props{
    categoryCake:string
}

/**
 * Page de boutique affichant les Cake correspondant à la catégorie
 * @param categoryCake: string, permet d'afficher les cakes correspondants à la catégorie 
 * @returns Composant JSX
 */
const ShopCategoryCake:React.FC<Props> =({ categoryCake="rollcake" }) => {
    const listCake = manager.categoryMap.get(categoryCake)
    let htmlCake = []

    const [isCheck, setIsCheck] = useState(() => {
      const saved = localStorage.getItem('toggleState');
      return saved !== null ? JSON.parse(saved) : false;
    });
  
    const handleCheckChange = (newState: boolean | ((prevState: boolean) => boolean)) => {
        setIsCheck(newState);
    };

    if (listCake)
    for (const cake of listCake){
        htmlCake.push(<ContainerCake key={cake.title} cake={cake}/>)
    }
    return (
      <div className={`${isCheck ? 'festive' : 'seasonal'} body`}>
        <Navbar/>
        <ChangeStyleSaison onCheckChange={handleCheckChange}/>
        <div className={`${isCheck ? 'festive' : 'seasonal'} content`}>
          <Link to="/shop"><button className="bt retour">Retour</button></Link>
          <h2>Cliquez sur l'un d'entre eux pour l'afficher en détails</h2>
          <div className="all-container-cake">
              {htmlCake}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default ShopCategoryCake