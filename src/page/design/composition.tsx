/********************************************************************
                          Biscuit                                   * 
********************************************************************/
const TEXTURE = [
    { value: 'ferme', label: 'Ferme' },
    { value: 'moelleux ', label: 'Moëlleux' },
    { value: 'fondant', label: 'Fondant' },
    { value: 'beurre', label: 'Beurre' }
  ];
  
const SAVEUR = [
    { value: 'vanille', label: 'Vanille' },
    { value: 'chocolat', label: 'Chocolat' },
    { value: 'fraise', label: 'Fraise' },
    { value: 'chocolat-noir', label: 'Chocolat noir' },
    { value: 'chocolat-lait', label: 'Chocolat lait' },
    { value: 'chocolat-blanc', label: 'Chocolat blanc' },
    { value: 'noisette', label: 'Noisette' },
    { value: 'noix', label: 'Noix' },
    { value: 'cacao', label: 'Cacao' },
    { value: 'nature', label: 'Nature' },
    { value: 'cannelle', label: 'Cannelle' }
]; 

const OPTION = [
  { value: 'aucun', label: 'Aucun' },
  { value: 'imbibage-rhum', label: 'Imbibage rhum' },
  { value: 'imbibage-kirsch', label: 'Imbibage kirsch' },
  { value: 'imbibage-grand-marnier', label: 'Imbibage grand-marnier' },
  { value: 'imbibage-calvados', label: 'Imbibage calvados' }
];

/********************************************************************
                          Fourage                                   * 
********************************************************************/
const FOURAGESAVEUR = [
  { value: 'ganache-chocolat-lait', label: 'Ganache chocolat lait' },
  { value: 'ganache-chocolat-noir', label: 'Ganache chocolat noir' },
  { value: 'ganache-chocolat-blanc', label: 'Ganache chocolat blanc' },
  { value: 'creme-beurre-praline', label: 'Crème au beurre praliné' },
  { value: 'caramel-beurre-sale', label: 'Caramel beurre salé' },
  { value: 'ganache-noix-coco', label: 'Ganache noix de coco' },
  { value: 'creme-beurre-chataigne', label: 'Crème au beurre châtaigne' },
  { value: 'fruit-saison', label: 'Fruit frais de saison' },
  { value: 'noisettes-noix-concassees', label: 'Noisettes et noix concassées' },
  { value: 'ganache-cafe', label: 'Ganache café' },
  { value: 'ganache-fruit-rouge', label: 'Ganache fruit rouge' },
  { value: 'creme-citron', label: 'Crème de citron' },
  { value: 'chantilly-mascarpone-vanille', label: 'Chantilly mascarpone vanillé' },
  { value: 'confiture-lait', label: 'Confiture de lait' },
  { value: 'confiture-maison', label: 'Confiture maison' }
];

const OPTIONFOURAGE = [
  { value: 'croustillant-praline-chocolat-lait', label: 'Croustillant praliné au chocolat lait' },
  { value: 'ganache-cafe', label: 'Croustillant praliné au chocolat lait' },
  { value: 'croustillant-praline-chocolat-blanc', label: 'Croustillant praliné au chocolat blanc' },
  { value: 'roustillant pistache au chocolat lait', label: 'roustillant pistache au chocolat lait' },
  { value: 'croustillant-pistache-chocolat-noir', label: 'Croustillant pistache au chocolat noir' },
  { value: 'croustillant-pistache-chocolat-blanc', label: 'Croustillant pistache au chocolat blanc' }
];


export default [TEXTURE,SAVEUR,OPTION,FOURAGESAVEUR,OPTIONFOURAGE]