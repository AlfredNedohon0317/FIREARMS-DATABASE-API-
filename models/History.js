const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  firearmId: { type: mongoose.Schema.Types.ObjectId, ref: 'Firearm', required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('History', historySchema);
