const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/userInfo/:userWallet', userController.getUserInfo);

router.post('/createUser', userController.createUser);

module.exports = router;

