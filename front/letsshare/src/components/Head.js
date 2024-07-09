import '../styles/Head.css'
import loupe from "../img/loupe.png"
import user from '../img/utilisateur.png'

function Head(){
    return (
        <div className="head">
            <div className="search-bar">
                <img src={loupe} alt="Search Icon" class="search-icon"/>
                <input type="text" placeholder="Search..." class="search-input"/>
            </div>
            <div className="icon">
                <img src={user} alt=""/>
            </div>
        </div>
    )
}

export default Head;