
Backend server
server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

// Initialize Express
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/fantasy_sports', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Model
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String,
  balance: { type: Number, default: 100 },
}));

// Route for User Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: 'User not found' });

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid password' });

  // Generate JWT Token
  const token = jwt.sign({ userId: user._id }, 'secretKey');
  res.json({ token });
});

// Route to Join Contest (example)
app.post('/join-contest', (req, res) => {
  const { userId, contestId } = req.body;
  // Logic to join contest (you need to add contest details to database)
  res.json({ message: 'Joined contest successfully' });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
