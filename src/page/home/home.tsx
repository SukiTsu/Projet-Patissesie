import ChangeStyleSain from "../../components/changeStyleSaison"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"

const Home =({}) => {
    return(
        <div className="container">
            <ChangeStyleSain />
            <Navbar/>
            <div className="content">
                <h1>Bienvenu sur mon site</h1>
                <p>Ici tu trouveras toute mes patisseries que je réalise avec amour et passion !</p>
            </div>
            
            <Footer/>
            
        </div>
    )
}

export default Home