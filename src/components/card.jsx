import { useNavigate } from 'react-router-dom'
import '../styles/cardStyle.css'

const IMAGE_URL = 'http://localhost:1337'

function Card ({ restaurant }) {
  const attributes = restaurant.attributes
  const imageUrl = IMAGE_URL + attributes.image.data.attributes.url

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/Restaurants/' + restaurant.id)
  }
  return (
    <div className='card'>
      <div className='cardHeader'>
        <img alt={attributes.name} src={imageUrl} />
      </div>
      <div className='cardBody'>
        <h4>{attributes.name}</h4>
        <p>{attributes.description}</p>
      </div>
      <div className='cardFooter'>
        <button onClick={handleClick}>Voir le restaurant</button>
      </div>
    </div>
  )
}

export default Card
