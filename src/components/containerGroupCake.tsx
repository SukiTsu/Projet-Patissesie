import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/containerGroupCake.css'

/**
 * Affichage des différents groupe des cakes, pour rediriger les utilisateurs vers la page correspondant
 */
interface Props{
    srcImgs:string[]
    link:string
    title:string
}

const ContainerGroupCake:React.FC<Props> = ({ srcImgs, link, title }) =>{
    const newLink = "/shop/"+link
    return(
        <div className="container-groupe-cake" key={link}>
            <Link to={newLink}>
                <div className={`image-box image-count-${srcImgs.length}`}>
                    {srcImgs.map((src, index) => (
                        <img src={src} alt={`Image ${index + 1}`} key={index} />
                    ))}
                </div>
                <h2>{title}</h2>
            </Link>
        </div>
    )
}

export default ContainerGroupCake