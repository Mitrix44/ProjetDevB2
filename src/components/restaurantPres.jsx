import '../styles/restaurantPresStyle.css'

function RestaurantPres ({ restaurant }) {
  const imageUrl = 'http://localhost:1337' + restaurant.image.data.attributes.url
  return (
    <section className='restaurantPres'>
      <div className='presentation'>
        <div className='image'>
          <img alt={restaurant.name} src={imageUrl} />
        </div>
        <div className='text'>
          <h1>{restaurant.name}</h1>
          <p>
            {restaurant.description}<br />
            {restaurant.adresse.street}, {restaurant.adresse.postecode}, {restaurant.adresse.city}<br />
            {restaurant.adresse.phone}
          </p>
        </div>
      </div>
    </section>
  )
}

export default RestaurantPres
