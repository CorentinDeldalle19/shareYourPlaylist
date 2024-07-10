import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/world.css';
import croix from '../img/traverser.png';
import like from '../img/silhouette-de-forme-simple-de-coeur.png';

function Cards() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        // Fonction pour charger les playlists de l'utilisateur connecté depuis l'API
        const fetchPlaylists = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/playlists', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setPlaylists(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching playlists:', error.response ? error.response.data : error.message);
            }
        };

        fetchPlaylists();
    }, []); // L'array vide [] en tant que deuxième argument signifie que useEffect s'exécute une seule fois après le montage initial

    const handleDeletePlaylist = async (id) => {
        try {
            console.log(id)
            await axios.delete(`http://localhost:3001/api/playlists/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            // Mettre à jour les playlists après la suppression
            const updatedPlaylists = playlists.filter(playlist => playlist.idplaylist !== id);
            setPlaylists(updatedPlaylists);
        } catch (error) {
            console.error('Error deleting playlist:', error.response ? error.response.data : error.message);
        }
    };
    
    

    return (
        <div className="cards" id="cards">
            {playlists.map(playlist => (
                <div className="card" key={playlist.idplaylist}>
                    <img src={playlist.imageUrl} alt="Album Cover" />
                    <div className="contentH">
                        <div>
                            <p className='title'>{playlist.title}</p>
                        </div>
                        <div className='likes'>
                            <div className='coeur'>
                                <p>{playlist.likes}</p>
                                <img src={like} alt="Like" />
                            </div>
                            <a href="#" onClick={() => handleDeletePlaylist(playlist.id)}>
                                <img src={croix} alt="Croix" />
                            </a>
                        </div>
                    </div>
                    <div className='genres'>
                        <p>{playlist.keyWord1}</p>
                        <p>{playlist.keyWord2}</p>
                        <p>{playlist.keyWord3}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;