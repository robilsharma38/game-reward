const express = require('express');
const rewardController = require('../controllers/rewardController');

const router = express.Router();

router.post('/saveReward', rewardController.saveReward);

router.get('/getUserReward/:userWallet', rewardController.getUserReward);

router.get('/getUserGameReward/:userWallet/:gameId', rewardController.getUserGameReward);

module.exports = router;

