import React from 'react';
import axios from 'axios'; // Importez Axios
import '../styles/FormParams.css'; // Assurez-vous de créer et d'importer ce fichier CSS

function FormParams() {
    const handleSubmit = async (event) => {
        event.preventDefault(); // Empêche le rechargement de la page par défaut lors de la soumission du formulaire
        
        const form = event.target.closest('form'); // Trouve le formulaire parent
        const formData = new FormData(form); // Crée un objet FormData à partir des données du formulaire

        try {
            const response = await axios.post('http://localhost:3001/api/playlists', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('token')}` // Inclure le token d'authentification si nécessaire
                }
            });

            console.log('Playlist uploaded successfully:', response.data);
            // Ici vous pouvez ajouter une logique pour rediriger l'utilisateur ou afficher un message de succès

        } catch (error) {
            console.error('Error uploading playlist:', error.message);
            // Gérer les erreurs : afficher un message d'erreur à l'utilisateur, par exemple
        }
    };

    return (
        <div id='form'>
            <div className="form" id="upload">
                <div className="titles">
                    <h1>UPLOAD</h1>
                    <h3>new playlist</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='inputs' id='register'>
                        <input type="text" name="title" placeholder='Title' required />
                        <input type="text" name="description" placeholder='Description' />
                        <input type="password" name="data" placeholder='Link' required />
                        <input type="text" name="keyWord1" placeholder='Genre' required />
                    </div>
                    <div className='button'>
                        <button type="submit" id='uploadButton'>Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormParams;