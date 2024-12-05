import { Link } from "react-router-dom";
import '../assets/style/navbar.css'
import cakeImage from '../assets/logo.png';
import { useState } from "react";

export default function Navbar(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <img src={cakeImage} alt="Logo Atelier-Dharma" className="navbar-logo" />

            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <Link to="/" className="link-navbar">
                        <strong>Page d'acceuil</strong>
                    </Link>
                </li>
                <li>
                    <Link to="/shop" className="link-navbar">
                        <strong>Vitrine</strong>
                    </Link>
                </li>
                <li>
                    <Link to="/cake-design" className="link-navbar">
                        <strong>Cake-design</strong>
                    </Link>
                </li>
            </ul>

            <div className="navbar-contact">
                <Link to="/contact" className="link-navbar">
                    <strong>Contact</strong>
                </Link>
            </div>

            <button className="menu-toggle" onClick={toggleMenu}>
                &#9776;
            </button>
        </nav>
    );
}
