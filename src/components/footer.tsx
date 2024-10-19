import { Link } from 'react-router-dom'
import '../assets/style/footer.css'

const Footer =({}) => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Nous suivre</h3>
                    <ul className="social-list">
                        <li><a href="https://www.facebook.com/profile.php?id=61567314448301">Facebook</a></li>
                        <li><a href="/">TikTok</a></li>
                        <li><a href="https://www.instagram.com/atelier__dharma/">Instagram</a></li>
                        <li><a href="/">LinkedIn</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Nos pages</h3>
                    <ul className="page-list">
                        <li><Link to="/" className="link-navbar">Accueil</Link></li>
                        <li><Link to="/shop" className="link-navbar">Boutique</Link></li>
                        <li><Link to="/cake-design" className="link-navbar">CakeDesign</Link></li>
                        <li><Link to="/contact" className="link-navbar">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Nous contacter</h3>
                    <ul className="contact-list">
                        <li><strong>Nous trouver :</strong>Route de Giez, Viarmes (95)</li>
                        <li><strong>Notre téléphone :</strong>07 68 35 26 75</li>
                        <li><strong>Notre mail :</strong>dharmaboulay@gmail.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer