import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ChangeStyleSaison from '../../components/changeStyleSaison';

const NotFound = () => {
  return (
    <div>
        <Navbar />
        <ChangeStyleSaison />
        <div className='content'>
           <h1>404 - Page non trouvé :(</h1>
            <p>Oops! Il se trouve que la page que vous essayez de trouver n'existe pas.</p>
            <Link to="/">Revenir à la page d'acceuil</Link>
        </div>
        <Footer />
    </div>
  );
};

export default NotFound;
