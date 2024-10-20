import React, { FC } from "react"
import '../../assets/style/styleFormulaire.css'


interface Props{
    choixSaveurBiscuit:string
    choixTextureBiscuit:string
    choixOptionBiscuit:string
    choixSaveurFourrage:string[]
    choixTextureFourrage:string
    choixTextureCouverture:string
    choixNombrePersonne:string
    motsClient:string
}

const Formulaire:React.FC<Props> = ({choixSaveurBiscuit,choixTextureBiscuit,choixOptionBiscuit,choixSaveurFourrage,choixTextureFourrage,choixTextureCouverture,choixNombrePersonne,motsClient}) => {
    const validCharacters = /^[a-zA-Z0-9\sàéèêëîïôùüç]*$/;
    
    if (motsClient == ""){
        motsClient = "Aucune précision"
    }else if (!validCharacters.test(motsClient)) {
        motsClient = "Merci de ne peux pas utiliser des caractère spéciaux"
    }
    return(
        <div className="">
            <h2>Ce que je souhaite</h2>
            <table>
                <tr>
                    <td></td>
                    <td><h3>Pour le Biscuit</h3></td>
                    <td><h3>Pour le Fourrage</h3></td>
                    <td><h3>Pour la couverture</h3></td>
                </tr>
                <tr>
                    <td><h3>Saveur:</h3></td>
                    <td>{choixSaveurBiscuit}</td>
                    <td>
                        <ul>
                            {choixSaveurFourrage.map((saveur) => (
                            <li key={saveur}>{saveur}</li>
                            ))}
                        </ul>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td><h3>Texture</h3></td>
                    <td>{choixTextureBiscuit}</td>
                    <td>{choixTextureFourrage}</td>
                    <td>{choixTextureCouverture}</td>
                </tr>
                <tr>
                    <td><h3>Supplément</h3></td>
                    <td>{choixOptionBiscuit}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <h3>Pour {choixNombrePersonne} parts</h3>
                    </td>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <h3>{motsClient}</h3>
                    </td>
                </tr>
            </table>
            
            
        </div>
    )
}
export default Formulaire