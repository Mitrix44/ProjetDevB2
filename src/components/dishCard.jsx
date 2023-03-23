function DishCard ({ dish }) {
  const imgURL = 'http://localhost:1337' + dish.image.data.attributes.url
  return (
    <div className='dishCard'>
      <div className='photo'>
        <img alt={dish.name} src={imgURL} />
      </div>
      <div>
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <button href='#'>Ajouter au panier</button>
      </div>
    </div>
  )
}

export default DishCard
