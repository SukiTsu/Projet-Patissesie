/*async function fetchData(url: string) {
    try {
      const response = await fetch(url)
      
  
      // Vérification de la réponse, si elle n'est pas OK (status != 200)
      if (!response.ok) {
        // Si le statut est 404, on lance une erreur explicite
        if (response.status === 400) {
          throw new Error(`Erreur 400: Ressource non trouvée à l'URL ${url}`);
        } else {
          throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
        }
      }
  
      const dataInsta = await response.json();
      console.log(dataInsta);
  
    } catch (error) {
      // Ici, on capture et affiche toutes les erreurs (404 et autres)
      console.error('Erreur lors du fetch:', error);
      return("Nous rencontrons un problème avec notre base de données")
    }
  }
  const url = " https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bmedia%7Bid%2Ccaption%2Cmedia_url%2Cpermalink%2Cmedia_type%2Ctimestamp%2Cchildren%7Bmedia_url%7D%7D%7D&access_token=EAAHiSqxOIusBOy05WNZCYmoowdOHzpU8ndkFXPkXWQOXBIyiy4c0TfqhsghDr2LPcpjUPqGZCiEoudwCoZBC4WnbPE7gSWt1lsxURIUNaRvBLRqfLq0mYAb3PjWXy4ZAQaJZBOULoTRZAWzGPyjHjZByLlhPoZAnnIz8HZCGXr4FwIE7pGfjBMZCrhZC6Hk2JEZA9z1ZAZAbmqfJx3CzEsvudBwZCGzSSkkxq1d"
  //const url = `https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bfollowers_count%2Cmedia_count%2Cmedia%7D&access_token=EAAHiSqxOIusBO3Tg7L1gY46gdFIYPFJtmvIlMkFKbe5tPEFheZBZA5AVHQEPWZBJxyoW5S62ZARZCj6Ly5k3DHtBpQNC7qbKN1HItSpyXONMZAs4WcrQIzt8D1V5vxZCMAVzq3FXoxyLmLgemCsUngomDNkJfTpcT8dk2Kdtq0P06Kd3kymtRVwIaw24rGzJcVRLFhn6fM9JBZCl6Nh14P0ZD`
  const Data = fetchData(url);
  */
const tokenAtelier = "IGQWRQRTFZAUkpnSnI0ZAklXSVU0RkNuOUl0d2FxSTR1ZAjRyQVdNWUZATNW5qS1E4cjdFSTduVGdSZADllRGRzTjhVVHZAWd2xQdnRNRm83ajJPOGE3R2RxdENEVDNpVmludThJNnUzSXJJR3FIenViblhteTFCaS00UlEZD"
const HASTAG = ["fanart","dessin"]

import CakeDictionary from '../../dictionaryCake'
import { useState } from "react"
import { ClassCake } from '../../classCake'
 
const idUser = "17841414994500741"
const id2 = "1307916620619552"
const dictionaryCake = CakeDictionary

//const url = "https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bfollowers_count%2Cmedia_count%2Cmedia%7D&access_token=EAAHiSqxOIusBO3Tg7L1gY46gdFIYPFJtmvIlMkFKbe5tPEFheZBZA5AVHQEPWZBJxyoW5S62ZARZCj6Ly5k3DHtBpQNC7qbKN1HItSpyXONMZAs4WcrQIzt8D1V5vxZCMAVzq3FXoxyLmLgemCsUngomDNkJfTpcT8dk2Kdtq0P06Kd3kymtRVwIaw24rGzJcVRLFhn6fM9JBZCl6Nh14P0ZD"
const token = "EAAHiSqxOIusBO3Tg7L1gY46gdFIYPFJtmvIlMkFKbe5tPEFheZBZA5AVHQEPWZBJxyoW5S62ZARZCj6Ly5k3DHtBpQNC7qbKN1HItSpyXONMZAs4WcrQIzt8D1V5vxZCMAVzq3FXoxyLmLgemCsUngomDNkJfTpcT8dk2Kdtq0P06Kd3kymtRVwIaw24rGzJcVRLFhn6fM9JBZCl6Nh14P0ZD"
//const url = `https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bfollowers_count%2Cmedia_count%2Cmedia%7Bid%2Ccomments_count%2Cmedia_url%7D%7D&access_token=${token}`
//const url =  `https://graph.instagram.com/${idUser}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${token}`

const url = "https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bmedia%7Bid%2Ccaption%2Cmedia_url%2Cpermalink%2Cchildren%7Bmedia_url%7D%7D%7D&access_token=EAAHiSqxOIusBOZBZBQm5lP5EbPW18QkUWb6mBU4WScMoiHHrfCtOImPXJYXpZALf0Om9WVcZAa8LN5K774scY4f2IWUz84hP5T4MVulWs8x2gxgoDeAZBij5Oax9KUZCN5MBXfMVt48lZA04EZBZAQZARfwN0ajlDuthZAcOGnywupYAFTP3W0ZBNyLsUHVNNkV7kXUwYcZBNNyYnZAhYpb9NXYAZDZD"


fetch(url)
.then(response => response.json())
.then(dataInsta => {
    const globalData = dataInsta.business_discovery.media.data
    //setMediaUrl(globalData.map((media: { media_url: any; }) => media.media_url));
    for (let i=0;i<globalData.length;i++){
      if (globalData[i].media_url != undefined){
        const cake = new ClassCake(globalData[i].media_url,globalData[i].caption)

        //Regarde les #
        for (const key in dictionaryCake) {
          if (globalData[i].caption.toLowerCase().includes(key.toLowerCase())) {
            //Le mot est présent dans la chaîne
            cake.setGroup(HASTAG[i])
            dictionaryCake[key].push(cake)
            break
          }
        }
      }else{
        console.log("probleme de lien")
      }
    }
    
})
.catch(error => console.error('Erreur:', error));

export default dictionaryCake