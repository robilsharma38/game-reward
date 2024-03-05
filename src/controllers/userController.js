const User = require('../models/userModel');

const userController = {

  getUserInfo: async (req, res) => {
    try {
      if(!req.params.userWallet){
        return res.status(400).json({ message: "User Wallet Required" });
      }
      const user = await User.findOne({ userWallet: req.params.userWallet });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  createUser: async (req, res) => {
    try {
        // Check if all required parameters are provided expect image
        if (!req.body.userWallet || !req.body.name || !req.body.email) {
            return res.status(400).json({ message: "All parameters are required expect image" });
        }
        const { userWallet, name, email, image } = req.body;
        const user = new User({ userWallet, name, email });
        const userSaved = await user.save();
        res.status(201).json(userSaved);
    } catch (err) {
        res.status(500).send(err);
    }
},

};

module.exports = userController;
