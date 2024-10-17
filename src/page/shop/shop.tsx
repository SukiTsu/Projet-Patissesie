import { useState } from "react";
import Navbar from "../../components/navbar";
import dictionaryCake from "./getData";
import ContainerGroupCake from "../../components/containerGroupCake";
import { ClassCake } from "../../classCake";
import Footer from "../../components/footer";

const Shop =({}) => {
   /* const idUser = "17841414994500741"
    const id2 = "1307916620619552"
    
    //const url = "https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bfollowers_count%2Cmedia_count%2Cmedia%7D&access_token=EAAHiSqxOIusBO3Tg7L1gY46gdFIYPFJtmvIlMkFKbe5tPEFheZBZA5AVHQEPWZBJxyoW5S62ZARZCj6Ly5k3DHtBpQNC7qbKN1HItSpyXONMZAs4WcrQIzt8D1V5vxZCMAVzq3FXoxyLmLgemCsUngomDNkJfTpcT8dk2Kdtq0P06Kd3kymtRVwIaw24rGzJcVRLFhn6fM9JBZCl6Nh14P0ZD"
    const token = "EAAHiSqxOIusBO3Tg7L1gY46gdFIYPFJtmvIlMkFKbe5tPEFheZBZA5AVHQEPWZBJxyoW5S62ZARZCj6Ly5k3DHtBpQNC7qbKN1HItSpyXONMZAs4WcrQIzt8D1V5vxZCMAVzq3FXoxyLmLgemCsUngomDNkJfTpcT8dk2Kdtq0P06Kd3kymtRVwIaw24rGzJcVRLFhn6fM9JBZCl6Nh14P0ZD"
    //const url = `https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bfollowers_count%2Cmedia_count%2Cmedia%7Bid%2Ccomments_count%2Cmedia_url%7D%7D&access_token=${token}`
    //const url =  `https://graph.instagram.com/${idUser}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${token}`
    const url = " https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bmedia%7Bid%2Ccaption%2Cmedia_url%2Cpermalink%2Cmedia_type%2Ctimestamp%2Cchildren%7Bmedia_url%7D%7D%7D&access_token=EAAHiSqxOIusBOy05WNZCYmoowdOHzpU8ndkFXPkXWQOXBIyiy4c0TfqhsghDr2LPcpjUPqGZCiEoudwCoZBC4WnbPE7gSWt1lsxURIUNaRvBLRqfLq0mYAb3PjWXy4ZAQaJZBOULoTRZAWzGPyjHjZByLlhPoZAnnIz8HZCGXr4FwIE7pGfjBMZCrhZC6Hk2JEZA9z1ZAZAbmqfJx3CzEsvudBwZCGzSSkkxq1d"

    const [mediaUrls,setMediaUrl] = useState([])
    fetch(url)
    .then(response => response.json())
    .then(dataInsta => {
      console.log(dataInsta)
      //const globalData = dataInsta.business_discovery.media.data
      //setMediaUrl(globalData.map((media: { media_url: any; }) => media.media_url));
    })
    .catch(error => console.error('Erreur:', error));*/
    
    let listContainer = []
    

    for (const key in dictionaryCake) {
      if (dictionaryCake[key].length === 0) break
      const tempCake = dictionaryCake[key][0]
      const container = <ContainerGroupCake srcImg={tempCake.getImgSrc()} link={key} title={key}/>
      listContainer.push(container)
    }
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