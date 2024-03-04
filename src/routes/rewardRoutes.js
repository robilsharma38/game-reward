const express = require('express');
const rewardController = require('../controllers/rewardController');

const router = express.Router();

router.post('/saveReward', rewardController.saveReward);

router.get('/getUserReward', rewardController.getUserReward);

router.get('/getUserGameReward', rewardController.getUserGameReward);

module.exports = router;

