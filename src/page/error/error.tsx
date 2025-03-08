import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import ChangeStyleSaison from '../../components/changeStyleSaison';

const NotFound = () => {
  const [isCheck, setIsCheck] = useState(() => {
    const saved = localStorage.getItem('toggleState');
    return saved !== null ? JSON.parse(saved) : false;
  });

  const handleCheckChange = (newState: boolean | ((prevState: boolean) => boolean)) => {
      setIsCheck(newState);
  };

  return (
    <div>
        <Navbar strTitre='Error'/>
        <ChangeStyleSaison onCheckChange={handleCheckChange}/>
        <div className={`${isCheck ? 'festive' : 'seasonal'} body`}>
           <h1>404 - Page non trouvé :(</h1>
            <p>Oops! Il se trouve que la page que vous essayez de trouver n'existe pas.</p>
            <Link to="/">Revenir à la page d'acceuil</Link>
        </div>
        <Footer />
    </div>
  );
};

export default NotFound;
