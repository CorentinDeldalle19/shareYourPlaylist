const express = require('express');
const playlistController = require('../controllers/Playlist');
const authenticateToken = require('../middlewares/auth')
const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/', authenticateToken, upload.single('image'), playlistController.createPlaylist);
router.get('/', playlistController.getPlaylists);
router.get('/:id', playlistController.getPlaylistById);
router.put('/:id', playlistController.updatePlaylist);
router.delete('/:id', playlistController.deletePlaylist);

module.exports = router;