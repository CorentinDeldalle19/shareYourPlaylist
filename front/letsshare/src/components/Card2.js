import React from 'react';
import '../styles/world.css';
import croix from '../img/traverser.png';
import like from '../img/silhouette-de-forme-simple-de-coeur.png';

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt="Album Cover" />
            <div className="contentH">
                <div>
                    <p className='title'>{props.title}</p>
                    <p className='description'>{props.description}</p>
                </div>
                <div className='likes'>
                    <div className='coeur'>
                        <p>{props.likes}</p>
                        <img src={like} alt="Like" />
                    </div>
                    <a href="#">
                        <img src={croix} alt="Croix" />
                    </a>
                </div>
            </div>
            <div className='genres'>
                <p>{props.keyWord1}</p>
            </div>
        </div>
    );
}

export default Card;
