async function fetchData(url: string) {
    try {
      const response = await fetch(url);
  
      // Vérification de la réponse, si elle n'est pas OK (status != 200)
      if (!response.ok) {
        // Si le statut est 404, on lance une erreur explicite
        if (response.status === 400) {
          throw new Error(`Erreur 404: Ressource non trouvée à l'URL ${url}`);
        } else {
          throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
        }
      }
  
      const dataInsta = await response.json();
      console.log(dataInsta);
  
    } catch (error) {
      // Ici, on capture et affiche toutes les erreurs (404 et autres)
      console.error('Erreur lors du fetch:', error);
    }
  }
  const url = `https://graph.facebook.com/v21.0/17841414994500741?fields=business_discovery.username(suukitsuu)%7Bfollowers_count%2Cmedia_count%2Cmedia%7D&access_token=EAAHiSqxOIusBO3Tg7L1gY46gdFIYPFJtmvIlMkFKbe5tPEFheZBZA5AVHQEPWZBJxyoW5S62ZARZCj6Ly5k3DHtBpQNC7qbKN1HItSpyXONMZAs4WcrQIzt8D1V5vxZCMAVzq3FXoxyLmLgemCsUngomDNkJfTpcT8dk2Kdtq0P06Kd3kymtRVwIaw24rGzJcVRLFhn6fM9JBZCl6Nh14P0ZD`
  const Data = fetchData(url);
  
export default Data