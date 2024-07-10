import '../styles/line.css'
import upload from '../img/telechargeur.png'
import Cards from './Cards';

function Line(){
    return (
        <div>
            <div className="line">
                <h3>What you shared...</h3>
                <a href="#" class="hover-element">
                    <img src={upload} alt=""/>
                    <span class="tooltip-text">Share new playlist</span>
                </a>
            </div>
            <Cards />
        </div>

    )
}

export default Line;