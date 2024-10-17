import Navbar from "../../components/navbar";
import dictionaryCake from "./getData";
import ContainerCake from "../../components/containerCake";
import Footer from "../../components/footer";

interface Props{
    categoryCake:string
}

/**
 * Page de boutique affichant les Cake correspondant à la catégorie
 * @param categoryCake: string, permet d'afficher les cakes correspondants à la catégorie 
 * @returns Composant JSX
 */
const ShopCategoryCake:React.FC<Props> =({ categoryCake="rollcake" }) => {
    const listCake = dictionaryCake[categoryCake]
    let htmlCake = []
    for (let i=0;i<listCake.length;i++){
        htmlCake.push(<ContainerCake cake={listCake[i]}/>)
    }
    return (
      <div className="shop-page">
        <Navbar/>
        <div className="all-container-cake">
            {htmlCake}
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default ShopCategoryCake