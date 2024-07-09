import React from 'react';
import '../styles/Rectangle.css';
import sade from '../img/sade.png';
import play from '../img/play.png'

function Rectangle() {
    return (
        <div className="sectRectangle">
            <div className="content">
                <div className="rectangle">
                    <img src={sade} alt="Femme" className="femme" />
                    
                    <div className='content2'>
                        <div className="text">
                            <h3>DISCOVER...</h3>
                            <h1>SADE</h1>
                            <p>Sade is a British singer of Nigerian origin, famous for her unique style blending soul, jazz and R&B. She is best known for her worldwide hits like "Smooth Operator" and "The Sweetest Taboo"</p>
                        </div>
                        <div className='bouton'>
                            <a href="#">
                                <img src={play} alt=""/>
                                <p>Play now</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rectangle;