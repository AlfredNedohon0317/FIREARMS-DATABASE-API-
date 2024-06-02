const mongoose = require('mongoose');

const manufacturerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  founded: { type: String, required: true },
});

module.exports = mongoose.model('Manufacturer', manufacturerSchema);
