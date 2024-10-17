import React from "react";
import '../assets/style/containerCake.css'
import { ClassCake } from "../classCake";

interface Props{
    cake:ClassCake
}

/**
 * Affichage d'un Cake
 * @param cake: Objet cake à afficher 
 * @returns Composant JSX
 */
const ContainerCake:React.FC<Props> = ({ cake }) =>{
    return(
        <div className="container-cake">
            <img src={cake.imgSrc}/>
            <h2>{cake.title}</h2>
            <div className="price">00.00 €</div>
            <p>{cake.content}</p>
        </div>
    )
}

export default ContainerCake