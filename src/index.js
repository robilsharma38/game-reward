const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const rewardRoute = require('./routes/rewardRoutes');
const userRoute = require('./routes/userRoutes');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api/v1/user', userRoute);
app.use('/api/v1/reward', rewardRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
