import Navbar from "../../components/navbar";
import dictionaryCake from "./getData";
import ContainerGroupCake from "../../components/containerGroupCake";
import Footer from "../../components/footer";
import initializeManager  from './getData';

const Shop =({}) => {
    let listContainer = []
    let manager;
    async function shop() {
      const manager = await initializeManager(); // Attend que manager soit initialisé
      
      console.log("shooopp':", manager.getClassCakesByCategory('saisonnier'));
      return 
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
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default Shop