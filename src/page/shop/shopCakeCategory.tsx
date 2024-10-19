import Navbar from "../../components/navbar";
import dictionaryCake from "./getData";
import ContainerCake from "../../components/containerCake";
import Footer from "../../components/footer";
import manager from "./getData";

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
    //console.log(listCake)
    let htmlCake = []
    if (listCake)
    for (const cake of listCake){
        htmlCake.push(<ContainerCake key={cake.title} cake={cake}/>)
    }
    return (
      <div className="shop-page">
        <Navbar/>
        <div className="content">
          <div className="all-container-cake">
              {htmlCake}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default ShopCategoryCake