import '../styles/cardStyle.css'

function Card({restaurant}) {
    const attributes = restaurant.attributes
    return ( 
        <div className="card">
            <div className="cardHeader">
                <img src="https://via.placeholder.com/300x150" />
            </div>
            <div className="cardBody">
                <h4>{attributes.name}</h4>
                <p>{attributes.description}</p>
            </div>
            <div className="cardFooter">
                <button href="#">Ajouter au panier</button>
            </div>
        </div>
     );
}

export default Card;