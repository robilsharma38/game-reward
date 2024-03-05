const Reward = require('../models/rewardModel');

const rewardController = {

    getUserReward: async (req, res) => {
    try {
      if(!req.params.userWallet){
        return res.status(400).json({ message: "User Wallet Required" });
      }
      const reward = await Reward.find({ userWallet: req.params.userWallet });
      if (!reward) {
        return res.status(404).json({ message: 'Reward not found' });
      }
      res.json(reward);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  saveReward: async (req, res) => {
    try {
        // Check if all required parameters are provided
        if (!req.body.userWallet || !req.body.gameId || !req.body.reward) {
            return res.status(400).json({ message: "All parameters are required" });
        }
        const { userWallet, gameId, reward } = req.body;
        const rewardobj = new Reward({ userWallet, gameId, reward });
        const rewardSaved = await rewardobj.save();
        res.status(201).json(rewardSaved);
    } catch (err) {
        res.status(500).send(err);
    }
},

  getUserGameReward: async (req, res) => {
    try {
      if(!req.params.userWallet || !req.params.gameId){
        return res.status(400).json({ message: "User Wallet and Game Id required" });
      }
      const reward = await Reward.find({ userWallet: req.params.userWallet,gameId:  req.params.gameId });
      if (!reward) {
        return res.status(404).json({ message: 'Reward not found' });
      }
      res.json(reward);
    } catch (err) {
      res.status(500).send(err);
    }
  },

};

module.exports = rewardController;
