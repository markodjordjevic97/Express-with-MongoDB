const router = require('express').Router();

const userController = require('../controllers/user');

router.get('/user/:userId', userController.getUserById)

router.post('/user', userController.createUser)

router.get('/users', userController.getAllUsers)

module.exports = router