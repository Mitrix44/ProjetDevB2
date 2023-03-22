import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../components/card'
import '../styles/restaurantsStyle.css'

function Restaurants () {
  // On déclare une variable (restaurants) qui va contenir nos restaurants
  // On obtient une méthode (setRestaurants) permettantde mettre à jour les restaurants et de raffraichir l'affichage
  const [restaurants, setRestaurants] = useState()
  // Méthode du cycle de vie d'un composant React permettantd'effectuer une action au montage du composant
  // le montage c'est l'apparition du composant à l'écran
  useEffect(() => {
    // On créé une methode pour récupérer les données provenant du backend (Strapi)
    const loadData = async () => {
      // On récupère les données du backend avec la librairie Axios (appel http)
      const response = await axios.get('http://localhost:1337/api/restaurants?populate=*')
      // On vérifie que l'appel d'api s'est bien passé (status 200 = "OK")
      if (response.status === 200) {
        // Si l'appel s'est bien passé, on enregistre les restaurants dans la variable "restaurant"
        const data = response.data.data
        setRestaurants(data)
      }
      console.log(response)
    }
    loadData()
  }, [])

  return (
    <div className='app'>
      <h1>Liste des Restaurants</h1>
      <div className='liste'>
        {
            // On vérifie qu'on à bien récupéré les resto
            // On créé une boucle sur le tableau de restaurants grâce à la fonction "map()"
            // On retourne pour chaque restaurant une Card pour afficher son contenu
            restaurants && restaurants.map(restaurant => {
              return (
                <Card key={restaurant.id} restaurant={restaurant} />
              )
            })
          }
      </div>
    </div>
  )
}

export default Restaurants
