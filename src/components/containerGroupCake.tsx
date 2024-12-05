import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/containerGroupCake.css'
import Carousel from "./carrousel";

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
                <div className="itemDeco"/>
                <Carousel images={srcImgs} />
                <h2 className="titre-modal-groupe">{title}</h2>
            </Link>
        </div>
    )
}

export default ContainerGroupCake