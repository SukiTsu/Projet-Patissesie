import { useState } from 'react';
import '../assets/style/navbar.css'
import ItemDrop from './ItemDrop';

interface Props{
  strTitre:string
}

const NavBarre:React.FC<Props> = ({strTitre}) => {
  const [isOpen, setIsOpen] = useState(false);

    return (
      <header className="header">
        <ItemDrop />
        <nav className="navbar">
          <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li><a href="/">Accueil</a></li>
            <li><a href={`/shop`}>Vitrine</a></li>
            <li><a href={`/cake-design`}>Cake Design</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Atelier Dharma</h1>
        <p>{strTitre}</p>
      </header>
    );
  }

  export default NavBarre;