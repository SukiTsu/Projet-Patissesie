import Navbar from "../../components/navbar";
import ContainerCake from "../../components/containerCake";
import Footer from "../../components/footer";
import manager from "./getData";
import { Link } from "react-router-dom";

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
  

    if (listCake)
    for (const cake of listCake){
        htmlCake.push(<ContainerCake key={cake.title} cake={cake}/>)
    }
    return (
      <div className='seasonal  body'>
        <Navbar strTitre={`Vitrine ${categoryCake}`}/>
        <div className='seasonal all-content'>
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