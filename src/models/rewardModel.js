const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  userWallet: { type: String, required: true },
  gameId: { type: Number, required: true },
  reward: { type: Number, required: true },
}, { timestamps: true });

const Reward = mongoose.model('Reward', rewardSchema);

module.exports = Reward;
