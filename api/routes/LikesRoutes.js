const express = require('express');
const LikesController = require('../controllers/Likes')
const router = express.Router();

router.post('/', LikesController.createLike);
router.get('/count', LikesController.countLikes)
router.get('/', LikesController.getLikes);
router.delete('/:id', LikesController.deleteLike);

module.exports = router;