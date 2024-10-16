import '../assets/style/footer.css'

const Footer =({}) => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Nous suivre</h3>
                    <ul className="social-list">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Nos pages</h3>
                    <ul className="page-list">
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">À propos</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Nous contacter</h3>
                    <ul className="contact-list">
                        <li><strong>Nous trouver :</strong> 123 Rue Exemple, Ville, Pays</li>
                        <li><strong>Notre téléphone :</strong> +33 1 23 45 67 89</li>
                        <li><strong>Notre mail :</strong> contact@exemple.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer