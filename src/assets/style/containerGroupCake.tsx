import React from "react";
import { Link } from "react-router-dom";


/**
 * Affichage des différents groupe des cakes, pour rediriger les utilisateurs vers la page correspondant
 */
interface Props{
    srcImg:string
    link:string
    title:string
}

const ContainerGroupCake:React.FC<Props> = ({ srcImg, link, title }) =>{
    const newLink = "/shop/"+link
    return(
        <Link to={newLink}>
            <div className="container-groupe-cake" key={link}>
                <img src={srcImg}/>
                <h2>{title}</h2>
            </div>
        </Link>
    )
}

export default ContainerGroupCake