const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userWallet: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
