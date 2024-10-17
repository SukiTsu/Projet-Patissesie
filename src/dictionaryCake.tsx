import { ClassCake } from './classCake'

/**
 * Stockage des données sous formes de dictionnaire. Chaque clefs représentent une liste d'éléments coorespondant à cette clef
 */
interface Dictionary {
    [key: string]: ClassCake[];
  }

  const CakeDictionary: Dictionary = {
    "rollcake": [],
    "cakedesign": []
  };

export default CakeDictionary