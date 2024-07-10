import Home from '../img/accueil.png'
import Playlist from '../img/playlist.png'
import Settings from '../img/parametres-cog.png'
import '../styles/Navbar.css'

function Navbar(){
    return (
        <div className="Navbar">
            <h1>LET'S</h1>
            <h3>SHARE</h3>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <img src={Home} alt=""/>
                            <p>Home</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Playlist} alt=""/>
                            <p>Your playlists</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Settings} alt=""/>
                            <p>Settings</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;