const express = require('express');
const userController = require('../controllers/User');
const authenticateToken = require('../middlewares/auth');
const { body } = require('express-validator');

const router = express.Router();

router.post('/register', 
    body('pseudo').notEmpty().withMessage('Pseudo is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    userController.createUser);

router.post('/login',
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').notEmpty().withMessage('Password is required'),
    userController.login);

router.post('/', authenticateToken, userController.createUser);
router.get('/', authenticateToken, userController.getUsers);
router.get('/:id', authenticateToken, userController.getUserByID);
router.put('/:id', authenticateToken, userController.updateUser);
router.delete('/:id', authenticateToken, userController.deleteUser);

module.exports = router;