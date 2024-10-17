import Navbar from "../../components/navbar";
import dictionaryCake from "./getData";
import ContainerGroupCake from "../../components/containerGroupCake";
import Footer from "../../components/footer";
import manager  from './getData';

const Shop =({}) => {
    let listContainer = []

    async function shop() {
       // Attend que manager soit initialisé
      for (const [categorie, cakes] of manager.categoryMap.entries()) {
        console.log(categorie, cakes);
        if (manager.categoryMap.get(categorie) != undefined){
          for (const cake of cakes) {
            const tempCake = cake
            const container = <ContainerGroupCake srcImg={tempCake.imgSrc} link={categorie} title={categorie}/>
            listContainer.push(container)
            break
          }
        }
      }
    }
    shop()
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