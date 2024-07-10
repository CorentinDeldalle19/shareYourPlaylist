const { Playlist } = require('../models')

class playlistController{
    // Créer une playlist avec une image obligatoire
    static async createPlaylist(req, res) {
        try {
            const { title, description, data, keyWord1, keyWord2, keyWord3 } = req.body;
            const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

            if (!imageUrl) {
                return res.status(400).json({ message: "An image is required" });
            }

            const playlist = await Playlist.create({
                title,
                description,
                data,
                keyWord1,
                keyWord2,
                keyWord3,
                imageUrl,
                likes: 0,
                userId: req.user.id // Utilisation de req.user.id pour associer la playlist à l'utilisateur connecté
            });

            res.status(201).json(playlist);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Obtenir toutes les playlists de l'utilisateur connecté
    static async getPlaylistsByUser(req, res) {
        try {
            const playlists = await Playlist.findAll({
                where: {
                    userId: req.user.id // Filtrer par l'ID de l'utilisateur connecté
                }
            });

            if (playlists.length === 0) {
                res.status(200).json({ message: "No playlists found for this user" });
            } else {
                res.status(200).json(playlists);
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Obtenir toutes les playlists
    static async getPlaylists (req, res) {
        try{
            const playlists = await Playlist.findAll();

            if(playlists.length === 0){
                res.status(200).json({ message: "No playlist found"});
            } else{
                res.status(200).json(playlists);
            }
        } catch (err){
            res.status(400).json({ message: err.message})
        }
    }

    // Obtenir une playlist par son ID
    static async getPlaylistById (req, res){
        try {
            const id = req.params.id;
            const playlist = await Playlist.findByPk(id);

            if(!playlist){
                res.status(200).json({ message: "No playlist found"});
            } else{
                res.status(200).json(playlist);
            }
        } catch (error){
            res.status(400).json({ message: error.message })
        }
    }

     // Mettre à jour une playlist par son ID
     static async updatePlaylist(req, res) {
        try {
            const id = req.params.id;
            const {
                title, 
                description, 
                data, 
                keyWord1, 
                keyWord2, 
                keyWord3, 
                likeCount } = req.body;

            const playlist = await Playlist.findByPk(id);
            if (!playlist) {
                return res.status(404).json({ message: "Playlist not found" });
            }

            await user.update({
                title: title || playlist.title, 
                description: description || playlist.description, 
                data: data || playlist.data, 
                keyWord1: keyWord1 || playlist.keyWord1, 
                keyWord2: keyWord2 || playlist.keyWord2, 
                keyWord3: keyWord3 || playlist.keyWord3, 
                likeCount: likeCount || playlist.likeCount
            });

            res.status(200).json(playlist);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Supprimer une playlist par son ID
    static async deletePlaylist(req, res) {
        try {
            const id = req.params.id;

            const playlist = await Playlist.findByPk(id);
            if (!playlist) {
                return res.status(404).json({ message: "Playlist not found" });
            }

            await playlist.destroy();

            res.status(204).end(); // 204 pour une suppression réussie sans contenu
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = playlistController;