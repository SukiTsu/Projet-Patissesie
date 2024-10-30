import { useState } from "react";
import ChangeStyleSaison from "../../components/changeStyleSaison"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import "../../assets/style/styleHome.css"
import { Link } from "react-router-dom";

const Home =({}) => {
    const [isCheck, setIsCheck] = useState(() => {
        const saved = localStorage.getItem('toggleState');
        return saved !== null ? JSON.parse(saved) : false;
    });

    const handleCheckChange = (newState: boolean | ((prevState: boolean) => boolean)) => {
        setIsCheck(newState);
    };
    
  
    return(
        <div className={`${isCheck ? 'festive' : 'seasonal'} body`}>
            <Navbar/>
            <ChangeStyleSaison onCheckChange={handleCheckChange}/>
            <div className="all-intro">
            <div className={`${isCheck ? 'festive' : 'seasonal'} intro`}>
                
                <div className="intro-content">
                    <div className="intro-image">
                        <img src="./coockies.PNG" alt="Dada cookies" />
                    </div>
                    <div className="intro-text">
                        <h2>Bienvenue dans mon univers gourmand !</h2>
                        <p>Depuis toute petite, la pâtisserie est pour moi une véritable passion. 
                            Après avoir passé des années à m'amuser avec les enfants dans des centres de loisirs, j’ai décidé de me lancer pleinement dans l’art sucré, notamment lors du confinement. 
                            Ce moment m’a permis de perfectionner mes recettes et d'obtenir mon CAP Pâtisserie. 
                            Aujourd'hui, je partage avec vous mes créations artisanales, réalisées avec amour et des ingrédients naturels, principalement issus de producteurs français.
                            </p>
                            <p>Découvrez mes cookies signature <strong>"Dada Cookie"</strong>, mes <strong>gâteaux de voyage</strong> (muffins, sablés, quatre-quarts) et des <strong> layer cakes personnalisés</strong> pour toutes les occasions. 
                            Que ce soit pour un anniversaire, une fête de famille, ou simplement pour vous faire plaisir, je suis là pour vous offrir des moments sucrés inoubliables !</p>
                    </div>
                </div>
            
            </div>
            <div className={`${isCheck ? 'festive' : 'seasonal'} intro`}>
                <div className="intro-content">
                    <div className="intro-text">
                        <h2>Des pâtisseries pour toute la famille </h2>
                        <p>Je propose des gourmandises pour petits et grands, avec une attention particulière à la qualité des ingrédients et à un dosage équilibré en sucre. 
                        Mes créations sont moins sucrées que celles du commerce classique, mais tout aussi gourmandes !</p>
                     
                        <h2>Ateliers Pâtisserie pour les curieux </h2>
                        <p>En plus de la vente, je propose des ateliers pâtisserie où vous pourrez, en famille ou entre amis, apprendre à réaliser vos propres créations sous ma supervision. 
                        Un moment ludique et créatif pour tous !
                        </p>
                        <h2>Douceurs sur les marchés</h2>
                        <p>Retrouvez-moi sur les marchés où je partage avec vous certaines de mes gourmandises artisanales comme des muffins gourmands, des parts individuelles de gâteaux roulés et surtout mes fameux Dada Cookies ! Venez goûter mes pâtisseries fraîches sur les marchés de Viarmes le mercredi ou celui de L'Isle-Adam
                         le dimanche. </p>   
                    </div>
                    <div className="intro-image medium">
                        <img src="./dada-marche.png" alt="Marchée l'Isle-Adame" />
                    </div>
                </div>
            </div>

            <div className={`${isCheck ? 'festive' : 'seasonal'} intro`}>
                <div className="intro-content">
                    <div className="intro-image medium">
                        <img src="./camion.jpg" alt="Image de gâteau" />
                    </div>
                    <div className="intro-text">
                    <h2>Commandez en ligne, faites-vous livrer ou venez me rencontrer !</h2> 
                    <p>Je suis basée à Viarmes, dans le Val d'Oise, et je propose des options de retrait ou de livraison dans un rayon de 15 km autour de la ville.
                    Vous pouvez également me retrouver sur certains marchés de la région.</p>
                    </div>
                </div>
            </div>
            

            <div className={`${isCheck ? 'festive' : 'seasonal'} intro`}>
                <div className="intro-content">
                    <div className="intro-text">
                        <h2>Envie de découvrir mes créations ?</h2>
                        <p>Jetez un œil à ma vitrine en ligne et laissez-vous tenter par mes pâtisseries artisanales !</p>
                    </div>
                </div>
            </div>
            </div>
            <section className="selection">
                <div className="gallery">
                    <div className="gallery-item">
                        <Link to='./shop'>
                            <img src="./cake-blanc-beige.png" alt="layer cake" />
                        </Link>
                    </div>
                    <div className="gallery-item">
                    <Link to='./shop'>
                        <img src="./cake-multi.png" alt="layer cake" />
                        </Link>
                    </div>
                    <div className="gallery-item">
                    <Link to='./shop'>
                        <img src="./cake-ps5.png" alt="layer cake" />
                        </Link>
                    </div>
                    <div className="gallery-item">
                    <Link to='./shop'>
                        <img src="./dead-pool.png" alt="layer cake" />
                        </Link>
                    </div>
                    <div className="gallery-item">
                    <Link to='./shop'>
                        <img src="./cake-blanc-fleur.png" alt="layer cake" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer/>
            
        </div>
    )
}

export default Home