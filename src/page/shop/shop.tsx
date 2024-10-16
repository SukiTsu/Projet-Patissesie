import { useState } from "react";
import Navbar from "../../components/navbar";
import Data from "./getData";

const Shop =({}) => {
    /*const idUser = "17841414994500741"
    const id2 = "1307916620619552"
    
    const url = "https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bfollowers_count%2Cmedia_count%2Cmedia%7D&access_token=EAAHiSqxOIusBO3Tg7L1gY46gdFIYPFJtmvIlMkFKbe5tPEFheZBZA5AVHQEPWZBJxyoW5S62ZARZCj6Ly5k3DHtBpQNC7qbKN1HItSpyXONMZAs4WcrQIzt8D1V5vxZCMAVzq3FXoxyLmLgemCsUngomDNkJfTpcT8dk2Kdtq0P06Kd3kymtRVwIaw24rGzJcVRLFhn6fM9JBZCl6Nh14P0ZD"
    const token = "EAAHiSqxOIusBO3Tg7L1gY46gdFIYPFJtmvIlMkFKbe5tPEFheZBZA5AVHQEPWZBJxyoW5S62ZARZCj6Ly5k3DHtBpQNC7qbKN1HItSpyXONMZAs4WcrQIzt8D1V5vxZCMAVzq3FXoxyLmLgemCsUngomDNkJfTpcT8dk2Kdtq0P06Kd3kymtRVwIaw24rGzJcVRLFhn6fM9JBZCl6Nh14P0ZD"
    //const url = `https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bfollowers_count%2Cmedia_count%2Cmedia%7Bid%2Ccomments_count%2Cmedia_url%7D%7D&access_token=${token}`
    //const url =  `https://graph.instagram.com/${idUser}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${token}`
    
    const [mediaUrls,setMediaUrl] = useState([])
    fetch(url)
    .then(response => response.json())
    .then(dataInsta => {
      console.log(dataInsta)
      //const globalData = dataInsta.business_discovery.media.data
      //setMediaUrl(globalData.map((media: { media_url: any; }) => media.media_url));
    })
    .catch(error => console.error('Erreur:', error));
    */
    console.log(Data)

    let htmlElement = []
    //for (let i=0;i<mediaUrls.length;i++){
    //  htmlElement.push(
    //  <img src={mediaUrls[i]}/>
    //)
    //}
    return (
      <div className="shop-page">
        <Navbar/>
        
      </div>
    )
  }
  
  export default Shop