import React, { FC } from "react"

interface Props{
    choixSaveurBiscuit:string
    choixTextureBiscuit:string
    choixOptionBiscuit:string
    choixSaveurFourrage:string[]
    choixTextureFourrage:string
    choixTextureCouverture:string
    choixNombrePersonne:string
}

const Formulaire:React.FC<Props> = ({choixSaveurBiscuit,choixTextureBiscuit,choixOptionBiscuit,choixSaveurFourrage,choixTextureFourrage,choixTextureCouverture,choixNombrePersonne}) => {
    return(
        <div className="rendu-text">
            <h2>Ce que je souhaite</h2>
            <table>
                <tr>
                    <td><h3>Pour le Biscuit</h3></td>
                    <td><h3>Pour le Fourrage</h3></td>
                    <td><h3>Pour la couverture</h3></td>
                </tr>
                <tr>
                    <td>
                        <ul className="option-biscuit">
                        <li>A la saveur: {choixSaveurBiscuit}</li>
                        <li>D'une texture: {choixTextureBiscuit}</li>
                        <li>Supplément: {choixOptionBiscuit}</li>
                        </ul>
                    </td>
                    <td>
                        <ul className="option-fourrage">
                            <li>Composé de saveur</li>
                            <ul>
                                {choixSaveurFourrage.map((saveur) => (
                                <li key={saveur}>{saveur}</li>
                            ))}
                            </ul>
                            <li>Et d'une texture à la/aux: {choixTextureFourrage}</li>
                        </ul>
                    </td>
                    <tr>
                        <td>
                            <ul className="option-couverture">
                                <li>Une texture à la/aux: {choixTextureCouverture}</li>
                            </ul>
                        </td>
                    </tr>
                </tr>
                <tr>
                    <td colSpan={3}>
                        <h3>Pour {choixNombrePersonne} parts</h3></td>
                    </tr>
            </table>
            
            
        </div>
    )
}
export default Formulaire