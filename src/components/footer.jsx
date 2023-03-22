import '../styles/footerStyle.css'
function Footer() {
    return ( 
        <footer className='footer'>
            <div className='dePlus'>
                <h3>A propos</h3>
                <nav>
                    <a href="#">FAQ</a><br/>
                    <a href="#">CGU</a><br/>
                    <a href="#">Mentions Légales</a>
                </nav>
            </div>
            <div className="menu">
                <nav>
                    <a href="#">Menu 1</a>
                    <a href="#">Menu 2</a>
                    <a href="#">Menu 3</a>
                </nav>
            </div>
            <div className="rs">
                <img src="https://via.placeholder.com/50x50" />
                <img src="https://via.placeholder.com/50x50" />
                <img src="https://via.placeholder.com/50x50" />
            </div>
        </footer>
     );
}

export default Footer;