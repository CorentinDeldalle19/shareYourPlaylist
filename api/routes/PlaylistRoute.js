const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/Playlist');
const authenticateToken = require('../middlewares/auth');
const upload = require('../middlewares/upload');

// Routes des playlists protégées par authentification
router.post('/', upload.single('image'), playlistController.createPlaylist);
router.get('/', playlistController.getPlaylists);
router.get('/:id', playlistController.getPlaylistById);
router.put('/:id', authenticateToken, playlistController.updatePlaylist);
router.delete('/:id', authenticateToken, playlistController.deletePlaylist);

module.exports = router;
