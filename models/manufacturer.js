const { Schema } = require('mongoose');


const manufacturerSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  founded: { type: String, required: true },
},
{timestamps: true}
);

module.exports = manufacturerSchema; 