import React, { useEffect, useState } from 'react';
import cirtrouille from '../assets/citrouille.png'

interface Props{
  onCheckChange: (values: boolean) => void;
}

const ChangeStyleSaison: React.FC<Props> = ({onCheckChange}) => {
  const [isAutumn, setIsAutumn] = useState(false);

  // Toggle état sauvegardé dans le localStorage
  const [isCheck, setIsCheck] = useState(() => {
    const saved = localStorage.getItem('toggleState');
    return saved !== null ? JSON.parse(saved) : false;
  });

  // Fonction de mise à jour du toggle
  const checkCase = () => {
    setIsCheck((prevState: any) => {
      const newState = !prevState;
      onCheckChange(newState); // Inform the parent about the change
      return newState;
    });
  };

  // Sauvegarde du toggle dans le localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('toggleState', JSON.stringify(isCheck));
  }, [isCheck]);

  // Détection de la saison actuelle (automne ici)
  const checkIfAutumn = () => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    // Période d'automne : du 21 septembre au 21 décembre
    return (month === 9 && day >= 21) || (month === 10) || (month === 11) || (month === 12 && day <= 21);
  };

  // Chargement des CSS en fonction de la saison et de l'état du toggle
  useEffect(() => {
    setIsAutumn(checkIfAutumn());

    const loadCSS = () => {
      if (checkIfAutumn()) {
          import('../assets/style/global/styleHalloween.css')
          import('../assets/style/global/styleAutome.css');
      }
    }
  loadCSS();
  }, [isCheck]); 
  
  return (
    <div>
      <label className="switch">
        <input className="input-toggle" type="checkbox" checked={isCheck} onChange={checkCase} />
        <span className="slider">
        <img src={cirtrouille}  alt="toggle image"  className="slider-image" />
        </span>
      </label>
      {isAutumn && (
        <>
          <div className={isCheck? "citrouille" : "leaf"}></div>
          <div className={isCheck? "citrouille" : "leaf"}></div>
          <div className={isCheck? "citrouille" : "leaf"}></div>
          <div className={isCheck? "citrouille" : "leaf"}></div>
          <div className={isCheck? "citrouille" : "leaf"}></div>
          <div className={isCheck? "citrouille" : "leaf"}></div>
          <div className={isCheck? "citrouille" : "leaf"}></div>
          <div className={isCheck? "citrouille" : "leaf"}></div>
        </>
      )}
    </div>
  );
};

export default ChangeStyleSaison;
