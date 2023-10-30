const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

const bookRoutes = require('./routes/bookRoutes');

const app = express();
dotenv.config();
console.log('process.env.MONGODB_URI :>> ',process.env.MONGODB_URI );
const PORT = process.env.PORT || 9000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
