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
  { value: 'aucun', label: 'Aucun' },
  { value: 'croustillant-praline-chocolat-lait', label: 'Croustillant praliné au chocolat lait' },
  { value: 'croustillant-praline-chocolat-noir', label: 'Croustillant praliné au chocolat noir' },
  { value: 'croustillant-praline-chocolat-blanc', label: 'Croustillant praliné au chocolat blanc' },
  { value: 'croustillant-pistache-chocolat-lait', label: 'Croustillant pistache au chocolat lait' },
  { value: 'croustillant-pistache-chocolat-noir', label: 'Croustillant pistache au chocolat noir' },
  { value: 'croustillant-pistache-chocolat-blanc', label: 'Croustillant pistache au chocolat blanc' }
];

const COUVERTURE = [
  { value: 'ganache-chocolat-noir', label: 'Ganache chocolat noir' },
  { value: 'ganache-chocolat-lait', label: 'Ganache chocolat lait' },
  { value: 'ganache-chocolat-blanc', label: 'Ganache chocolat blanc' },
  { value: 'creme-beurre-ruse', label: 'Crème au beurre ruse' },
  { value: 'creme-beurre-meringue-suisse', label: 'Crème au beurre à la meringue suisse' },
  { value: 'ganache-chocolat-noir-pate-sucre', label: 'Ganache chocolat noir + pâte à sucre' },
  { value: 'ganache-chocolat-noir-pate-amande', label: "Ganache chocolat noir + pâte d’amande" },
  { value: 'ganache-chocolat-lait-pate-sucre', label: 'Ganache chocolat lait + pâte à sucre' },
  { value: 'ganache-chocolat-lait-pate-amande', label: "Ganache chocolat lait + pâte d’amande" }
]

const NOMBREPERSONNE = [
  { value: '8', label: '8' },
  { value: '10', label: '10' },
  { value: '12', label: '12' },
  { value: '14', label: '14' },
  { value: '16', label: '16' },
  { value: '18', label: '18' },
  { value: '20', label: '20' },
  { value: '24', label: "24" },
  { value: '26', label: '26' },
  { value: '30', label: "30" }
]
export default [TEXTURE,SAVEUR,OPTION,FOURAGESAVEUR,OPTIONFOURAGE,COUVERTURE,NOMBREPERSONNE]