const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/userInfo', userController.getUserInfo);

router.post('/createUser', userController.createUser);

module.exports = router;

