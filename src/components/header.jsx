import '../styles/headerStyle.css'
function Header () {
  return (
    <header className='header'>
      <div className='logo'>
        <img src='https://via.placeholder.com/150x150' />
      </div>
      <div className='menu'>
        <nav>
          <a href='/'>Accueil</a>
          <a href='/Restaurants'>Restaurants</a>
          <a href='About'>About</a>
        </nav>
      </div>
      <div className='rs'>
        <img src='https://via.placeholder.com/50x50' />
        <img src='https://via.placeholder.com/50x50' />
        <img src='https://via.placeholder.com/50x50' />
      </div>
    </header>
  )
}

export default Header
