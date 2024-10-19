import React, { useEffect, useState } from 'react';

const ChangeStyleSaison: React.FC = () => {
  const [isAutumn, setIsAutumn] = useState(false);

  useEffect(() => {
    
    const checkIfAutumn = () => {
      const now = new Date();
      const month = now.getMonth() + 1; 
      const day = now.getDate();

      // Période d'automne : du 21 septembre au 21 décembre
      return (month === 9 && day >= 21) || (month === 10) || (month === 11) || (month === 12 && day <= 21);
    };

    setIsAutumn(checkIfAutumn());

    // Import dynamique du fichier CSS si c'est l'automne
    if (checkIfAutumn()) {
      import('../assets/style/global/styleAutome.css');
    }
  }, []);

  return (
    <div>
      {isAutumn && (
        <>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
          <div className="leaf"></div>
        </>
      )}
    </div>
  );
};

export default ChangeStyleSaison;
