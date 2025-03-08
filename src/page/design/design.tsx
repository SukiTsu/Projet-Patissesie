import { useState } from "react"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import composition from "./composition"
import SelectPerso from "../../components/selectPerso"
import ModalSect from "../../components/modalCheck"
import Modal from "../../components/modal"
import Formulaire from "./formulaire"
import '../../assets/style/design/styleDesign.css'
import '../../assets/style/design/styleFourrage.css'
import '../../assets/style/design/styleCouverture.css'
import '../../assets/style/design/styleRendu.css'
import '../../assets/style/design/styleFormulaire.css'
import ChangeStyleSaison from "../../components/changeStyleSaison"
import Textarea from "../../components/textArea"

const Design =({}) => {
    const [choixTextureBiscuit,setChoixTextureBiscuit] = useState("pas-precise")
    const [choixSaveurBiscuit,setChoixSaveurBiscuit] = useState("pas-precise")
    const [choixOptionBiscuit,setChoixOptionBiscuit] = useState("aucun")
    const [choixSaveurFourrage,setChoixSaveurFourrage] = useState(["aucun"])
    const [choixTextureFourrage,setChoixTextureFourrage] = useState("pas-precise")
    const [choixTextureCouverture,setChoixTextureCouverture] = useState("pas-precise")
    const [choixNombrePersonne,setChoixNombrePersonne] = useState("8")
    const [motsClients,setMotsClients] = useState("")
   

    return(
        <div className='seasonal body'>
            <Navbar strTitre="Cake Design"/>
            <div className='festive content'>
                <h1>Pesonnalisez votre cake</h1>
                <p>Ici, vous pouvez personnaliser votre Cake-Design grâce à ce formulaire ci-dessous. Une fois rempli, cliquer sur le bouton "Afficher un devis" pour ainsi obtenir un devis.
                Faites une capture d'écran pour faciliter notre prochain échange
                </p>
                <div className="content-design">
                    <div className="redu-cake">
                        <div className={`couverture ${choixTextureCouverture}`}>

                                <div className={`biscuit ${choixSaveurBiscuit} texture ${choixTextureBiscuit}`}> </div>
                                <div className={`all-fourrage ${choixSaveurFourrage[0]=="aucun" || choixSaveurFourrage[0]==undefined}`}>
                                    {choixSaveurFourrage.map((saveur) => (
                                        <div key={saveur} className={`fourrage ${saveur} texture ${choixTextureFourrage}`}></div>
                                    ))}
                                </div>
                                    
                                <div className={`biscuit ${choixSaveurBiscuit} texture ${choixTextureBiscuit}`}> </div>
                                <div className={`all-fourrage ${choixSaveurFourrage[0]=="aucun" || choixSaveurFourrage[0]==undefined}`}>
                                    {choixSaveurFourrage.map((saveur) => (
                                        <div key={saveur} className={`fourrage ${saveur} texture ${choixTextureFourrage}`}></div>
                                    ))}
                                </div>
                            
                                <div className={`biscuit ${choixSaveurBiscuit} texture ${choixTextureBiscuit}`}> </div>
                                <div className={`all-fourrage ${choixSaveurFourrage[0]=="aucun" || choixSaveurFourrage[0]==undefined}`}>
                                    {choixSaveurFourrage.map((saveur) => (
                                        <div key={saveur} className={`fourrage ${saveur} texture ${choixTextureFourrage}`}></div>
                                    ))}
                                </div>
                            
                                <div className={`biscuit ${choixSaveurBiscuit} texture ${choixTextureBiscuit}`}> </div>
                                <div className={`all-fourrage ${choixSaveurFourrage[0]=="aucun" || choixSaveurFourrage[0]==undefined}`}>
                                    {choixSaveurFourrage.map((saveur) => (
                                        <div key={saveur} className={`fourrage ${saveur} texture ${choixTextureFourrage}`}></div>
                                    ))}
                                </div>
                            
                                <div className={`biscuit ${choixSaveurBiscuit} texture ${choixTextureBiscuit}`}> </div>
                                <div className={`all-fourrage ${choixSaveurFourrage[0]=="aucun" || choixSaveurFourrage[0]==undefined}`}>
                                    {choixSaveurFourrage.map((saveur) => (
                                        <div key={saveur} className={`fourrage ${saveur} texture ${choixTextureFourrage}`}></div>
                                    ))}
                                </div>
                            
                                <div className={`biscuit ${choixSaveurBiscuit} texture ${choixTextureBiscuit}`}> </div>
                                <div className={`all-fourrage ${choixSaveurFourrage[0]=="aucun" || choixSaveurFourrage[0]==undefined}`}>
                                    {choixSaveurFourrage.map((saveur) => (
                                        <div key={saveur} className={`fourrage ${saveur} texture ${choixTextureFourrage}`}></div>
                                    ))}
                                </div>
                            
                                <div className={`biscuit ${choixSaveurBiscuit} texture ${choixTextureBiscuit}`}> </div>
                                <div className={`all-fourrage ${choixSaveurFourrage[0]=="aucun" || choixSaveurFourrage[0]==undefined}`}>
                                    {choixSaveurFourrage.map((saveur) => (
                                        <div key={saveur} className={`fourrage ${saveur} texture ${choixTextureFourrage}`}></div>
                                    ))}
                                </div>
                            
                                <div className={`biscuit ${choixSaveurBiscuit} texture ${choixTextureBiscuit}`}> </div>
                                <div className={`all-fourrage ${choixSaveurFourrage[0]=="aucun" || choixSaveurFourrage[0]==undefined}`}>
                                    {choixSaveurFourrage.map((saveur) => (
                                        <div key={saveur} className={`fourrage ${saveur} texture ${choixTextureFourrage}`}></div>
                                    ))}
                                </div>
                            
                           
                        </div>
                    </div>
                    
                    <div className="action-user">
                        <h2>Ma touche personnelle sur</h2>
                        <div className="modif-biscuit">
                            <h2>Le biscuit</h2>
                            <label>Une texture: </label>
                                <SelectPerso value={choixTextureBiscuit} data={composition[0]} method={setChoixTextureBiscuit}/><br/>
                            <label>A la saveur: </label>
                                <SelectPerso value={choixSaveurBiscuit} data={composition[1]} method={setChoixSaveurBiscuit}/><br/>
                            <label>Un supplément?: </label>
                                <SelectPerso value={choixOptionBiscuit} data={composition[2]} method={setChoixOptionBiscuit}/>
                            
                            <h2>Le fourrage</h2>
                            <label>Choix entre différent topic</label>
                                <ModalSect data={composition[3]} method={setChoixSaveurFourrage} />
                            <label>Choix de la texture</label>
                                <SelectPerso value={choixTextureFourrage} data={composition[4]} method={setChoixTextureFourrage}/>
                            
                            <h2>La couverture</h2>
                                <SelectPerso value={choixTextureCouverture} data={composition[5]} method={setChoixTextureCouverture}/>

                            <h2>Nombre de part</h2>
                                <SelectPerso value={choixNombrePersonne} data={composition[6]} method={setChoixNombrePersonne}/>
                            
                            <h2>Un détails à ajouter?</h2>
                                <Textarea valueUser={motsClients} method={setMotsClients}/>
                                <Modal content={<Formulaire choixSaveurBiscuit={choixSaveurBiscuit} choixTextureBiscuit={choixTextureBiscuit} choixOptionBiscuit={choixOptionBiscuit} choixSaveurFourrage={choixSaveurFourrage} choixTextureFourrage={choixTextureFourrage} choixTextureCouverture={choixTextureCouverture} choixNombrePersonne={choixNombrePersonne} motsClient={motsClients}/>}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Design