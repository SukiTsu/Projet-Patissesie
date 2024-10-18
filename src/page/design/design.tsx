import { useState } from "react"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import composition from "./composition"
import '../../assets/style/styleDesign.css'

const Design =({}) => {
    const [choixTexture,setChoixTexture] = useState("")
    const [choixSaveur,setChoixSaveur] = useState("")
    

    return(
        <div className="content">
            <Navbar/>
            <h1>Pesonnalisez votre cake</h1>
            <div className="content-design">
                <div className="redu-cake">
                    <div className="couverture">
                        <div className={`biscuit ${choixSaveur} texture ${choixTexture}`}>
                                              
                        </div>
                        <div className="fourage"></div>
                    </div>
                </div>

                <div className="rendu-text">
                    <h2>Ce que je souhaite</h2>
                    <ul>
                        <li>Un Biscuit à la/aux: {choixSaveur}</li>
                        <li>D'une texture: {choixTexture}</li>
                    </ul>
                </div>

                <div className="action-user">
                    <select required={true} multiple={false} className="input-field" value={choixTexture} onChange={(e) => setChoixTexture(e.target.value)} >
                    {composition[0].map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                    </select>
                    <select required={true} multiple={false} className="input-field" value={choixSaveur} onChange={(e) => setChoixSaveur(e.target.value)} >
                    {composition[1].map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                    </select>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Design