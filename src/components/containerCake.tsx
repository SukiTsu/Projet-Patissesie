import React, { useState } from "react";
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

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false); 
    };
    if (showModal){
        return(
            <div className="modal-overlay" onClick={closeModal}>
                <div className="container-cake" onClick={openModal}>
                    <img src={cake.imgSrc}/>
                    <h2>{cake.title}</h2>
                    {/*<div className="price">00.00 €</div> */}
                    <p>{cake.content}</p>
                    <button onClick={closeModal}  className="bt-modal-close" >Fermer</button>
                </div>
            </div>
        )
    }
    return(
        <div className="container-cake" onClick={openModal}>
            <img src={cake.imgSrc}/>
            <h2>{cake.title}</h2>
        </div>
    )
}
export default ContainerCake