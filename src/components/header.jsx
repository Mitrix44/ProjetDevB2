import '../styles/headerStyle.css'
function Header() {
    return ( 
        <header className="header">
            <div className="logo">
                <img src="https://via.placeholder.com/150x150" />
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
        </header>
     );
}

export default Header;