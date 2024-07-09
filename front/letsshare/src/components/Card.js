import React from 'react';
import '../styles/world.css';

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt="Album Cover" />
            <p className='title'>{props.title}</p>
            <p className='artist'>{props.artist}</p>
        </div>
    );
}

export default Card;
