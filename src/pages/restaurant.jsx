import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DishesList from '../components/dishesList'
import RestaurantPres from '../components/restaurantPres'

function Restaurant () {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`http://localhost:1337/api/restaurants/${id}?populate[image][populate]=*&populate[dishes][populate]=*&populate[adresse][populate]=*`)
      if (response.status === 200) {
        const data = response.data.data
        setRestaurant(data)
      }
    }
    loadData()
  })

  return restaurant && (
    <>
      <RestaurantPres restaurant={restaurant.attributes} />
      <DishesList dishes={restaurant.attributes.dishes.data} />
      <pre>{JSON.stringify(restaurant, null, 2)}</pre>
    </>
  )
}

export default Restaurant
