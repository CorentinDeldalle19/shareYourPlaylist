import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/world.css';
import croix from '../img/traverser.png';
import like from '../img/silhouette-de-forme-simple-de-coeur.png';

function Cards() {
    const [playlists, setPlaylists] = useState([]);

    const fetchPlaylists = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/playlists', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log("Playlists fetched from API: ", response.data);
            setPlaylists(response.data);
        } catch (error) {
            console.error('Error fetching playlists:', error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        fetchPlaylists();
    }, []);

    const handleDeletePlaylist = async (id) => {
        try {
            console.log("Deleting playlist with ID: ", id);
            await axios.delete(`http://localhost:3001/api/playlists/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log("Playlist deleted successfully.");
            fetchPlaylists();
        } catch (error) {
            console.error('Error deleting playlist:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="cards" id="cards">
            {Array.isArray(playlists) && playlists.length > 0 ? (
                playlists.map(playlist => (
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
                                <a href="#" onClick={() => handleDeletePlaylist(playlist.idplaylist)}>
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
                ))
            ) : (
                <p>You haven't shared a playlist yet</p>
            )}
        </div>
    );
}

export default Cards;