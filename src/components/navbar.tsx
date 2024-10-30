import { Link } from "react-router-dom";
import '../assets/style/navbar.css'
import cakeImage from '../assets/logo.png';

export default function Navbar() {
    return (
      <nav className="navbar">

        <img src={cakeImage} alt="Logo Atelier-Dharma" className="navbar-logo"/>

        <ul className="navbar-menu">
          <li>
            <Link to="/" className="link-navbar">
              <strong>Home</strong>
            </Link>
          </li>
          <li>
            <Link to="/shop" className="link-navbar">
              <strong>Shop</strong>
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

      </nav>
    );
  }