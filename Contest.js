Database module


models/Contest.js
const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
  name: String,
  entryFee: Number,
  prizePool: Number,
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Contest = mongoose.model('Contest', contestSchema);
module.exports = Contest;
