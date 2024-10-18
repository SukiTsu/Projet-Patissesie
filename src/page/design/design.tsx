import { useState } from "react"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import composition from "./composition"
import '../../assets/style/styleDesign.css'
import SelectPerso from "../../components/selectPerso"
import ModalSect from "../../components/modalCheck"

const Design =({}) => {
    const [choixTextureBiscuit,setChoixTextureBiscuit] = useState("")
    const [choixSaveurBiscuit,setChoixSaveurBiscuit] = useState("")
    const [choixOptionBiscuit,setChoixOptionBiscuit] = useState("aucun")

    const handleSelectedValues = (values: string[]) => {
        console.log("Valeurs cochées : ", values);
    };

    return(
        <div className="content">
            <Navbar/>
            <h1>Pesonnalisez votre cake</h1>
            <div className="content-design">
                <div className="redu-cake">
                    <div className="couverture">
                        <div className={`biscuit ${choixSaveurBiscuit} texture ${choixTextureBiscuit}`}> </div>
                        <div className="fourage"></div>
                    </div>
                </div>

                <div className="rendu-text">
                    <h2>Ce que je souhaite</h2>
                    <ul className="option-biscuit">
                        <li>Un Biscuit à la/aux: {choixSaveurBiscuit}</li>
                        <li>D'une texture: {choixTextureBiscuit}</li>
                        <li>Supplément: {choixOptionBiscuit}</li>
                    </ul>
                </div>

                <div className="action-user">
                    <h1>Ma touche personnelle sur</h1>
                    <div className="modif-biscuit">
                        <h2>Le biscuit</h2>
                        <label>Une texture: </label>
                            <SelectPerso value={choixTextureBiscuit} data={composition[0]} method={setChoixTextureBiscuit}/>
                        <label>A la saveur: </label>
                            <SelectPerso value={choixSaveurBiscuit} data={composition[1]} method={setChoixSaveurBiscuit}/>
                        <label>Un supplément?: </label>
                        <SelectPerso value={choixOptionBiscuit} data={composition[2]} method={setChoixOptionBiscuit}/>
                        <h2>Au fourage</h2>
                        <ModalSect data={composition[3]} method={handleSelectedValues} />
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Design