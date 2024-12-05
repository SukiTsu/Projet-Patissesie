import React, { useEffect, useState } from 'react';

interface Props{
  onCheckChange: (values: boolean) => void;
}

const ChangeStyleSaison: React.FC<Props> = ({onCheckChange}) => {

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

  // Chargement des CSS en fonction de la saison et de l'état du toggle
  useEffect(() => {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1; // Mois (0 = janvier, donc on ajoute 1)
    let season: string;

    if ((month >= 3 && month <= 5)) {
        season = "spring";
    } else if (month >= 6 && month <= 8) {
        season = "summer";
    } else if (month >= 9 && month <= 11) {
        season = "autumn";
    } else {
        season = "winter";
    }
    import('../assets/style/global/styleMouvement.css');
    import('../assets/style/global/festif/styleGlobalFestif.css');
    import('../assets/style/global/season/styleGlobalSeason.css');

    switch (season) {
      case "spring":
        console.log("🌸 It's spring! Time to enjoy blooming flowers.");
        // Ajouter votre code spécifique au printemps ici
        break;
      case "summer":
        console.log("☀️ It's summer! Perfect time for a beach trip.");
        // Ajouter votre code spécifique à l'été ici
        break;
      case "autumn":
        console.log("🍂 It's autumn! Watch the leaves change colors.");
        import('../assets/style/global/festif/styleHalloween.css');
        import('../assets/style/global/season/styleAutome.css');
        break;
      case "winter":
        console.log("❄️ It's winter! Stay warm and cozy.");
        import('../assets/style/global/festif/styleNoel.css');
        import('../assets/style/global/season/styleHiver.css');
        break;
      default:
        console.log("Unknown season!");
    }
  },); 
  
  return (
    <div>
      <div className={`${isCheck ? 'festive' : 'seasonal'}`}>
      <label className="switch">
        <input className="input-toggle" type="checkbox" checked={isCheck} onChange={checkCase} />
        <span className="slider">
        <div  className="slider-image" />
        </span>
      </label>
      </div>
      
      <div className={`${isCheck ? 'festive' : 'seasonal'}`}>
        <div className="itemDrop"></div>
        <div className="itemDrop"></div>
        <div className="itemDrop"></div>
        <div className="itemDrop"></div>
        <div className="itemDrop"></div>
        <div className="itemDrop"></div>
        <div className="itemDrop"></div>
        <div className="itemDrop"></div>
      </div>
     
    </div>
  );
};

export default ChangeStyleSaison;
