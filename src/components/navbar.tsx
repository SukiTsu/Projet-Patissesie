import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <div className="navbar">
        <h2>
          <Link to="/" className="link-navbar">
            <strong>Home</strong>
          </Link>
        </h2>
        <h2>
          <Link to="/shop" className="link-navbar">
            <strong>Shop</strong>
          </Link>
        </h2>
      </div>
    );
  }