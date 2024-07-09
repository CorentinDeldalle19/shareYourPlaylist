const { Like, User, Playlist } = require('../models')

class likesController{
    // Créer un like
    static async createLike(req, res){
        try{
            const { userId, playlistId } = req.body;

            const user = User.findByPk(userId);
            const playlist = Playlist.findByPk(playlistId);

            if(!user || !playlist){
                return res.status(404).json({ message: "User or playlist not found"})
            }

            const like = await Like.create({ userId, playlistId });
            res.status(201).json(like);
        } catch(err){
            res.status(400).json({ message: err.message });
        }
    }

    // Obtenir tous les likes
    static async getLikes(req, res) {
        try {
        const likes = await Like.findAll();
        res.status(200).json(likes);
        } catch (err) {
        res.status(400).json({ message: err.message });
        }
    }

    // Supprimer un like par ID
    static async deleteLike(req, res) {
        try {
        const { id } = req.params;
        const like = await Like.findByPk(id);

        if (!like) {
            return res.status(404).json({ message: "Like not found" });
        }

        await like.destroy();
        res.status(204).end();
        } catch (err) {
        res.status(400).json({ message: err.message });
        }
    }

    // Compter le nombre total de likes
    static async countLikes(req, res) {
        try {
            const count = await Like.count();
            res.status(200).json({ totalLikes: count });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

module.exports = likesController;
