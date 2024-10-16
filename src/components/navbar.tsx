import { Link } from "react-router-dom";
import '../assets/style/navbar.css'

export default function Navbar() {
    return (
      <nav className="navbar">

        <div className="navbar-logo">
          <p>Logo</p>
        </div>

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
            <Link to="/blog" className="link-navbar">
              <strong>Blog</strong>
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