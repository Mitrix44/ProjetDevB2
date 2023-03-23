import DishCard from './dishCard'
import '../styles/dishesListeStyle.css'

function DishesList ({ dishes }) {
  return (
    <div className='dishesList'>
      {
          dishes && dishes.map(dish => {
            return (
              <DishCard key={dish.id} dish={dish.attributes} />
            )
          })
      }
    </div>
  )
}

export default DishesList
