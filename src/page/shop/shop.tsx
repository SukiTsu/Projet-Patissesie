import { useState } from "react";
import Navbar from "../../components/navbar";

const Shop =({}) => {
    const token = "EAAHiSqxOIusBOZBDglDbapfWkWoZCGM7rWRw1jVNmZB59rGk2DZCamdn7Ir9wRWICZCGF9pO9jJ1kwguZAOepT7aDW0QXZA4a8jN1izOpZC0VjYYoMvLaF1QJ65WUvz26pGSivNTGiNSzpqqxWhUk3PRX7sETExZCvkcUttKNWINM7cARqMZBn9tLTZBQkV2NDVTAhFQIvMHCfSTfxJTs1zKgZDZD"
    const url = `https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bfollowers_count%2Cmedia_count%2Cmedia%7Bid%2Ccomments_count%2Cmedia_url%7D%7D&access_token=${token}`
    const [mediaUrls,setMediaUrl] = useState([])
    fetch(url)
    .then(response => response.json())
    .then(dataInsta => {
      const globalData = dataInsta.business_discovery.media.data
      setMediaUrl(globalData.map((media: { media_url: any; }) => media.media_url));
    })
    .catch(error => console.error('Erreur:', error));
    
    let htmlElement = []
    for (let i=0;i<mediaUrls.length;i++){
      htmlElement.push(
      <img src={mediaUrls[i]}/>
    )
    }
    return (
      <div className="shop-page">
        <Navbar/>
        {htmlElement}
      </div>
    )
  }
  
  export default Shop