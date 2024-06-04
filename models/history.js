
//const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const historySchema = new Schema({
  firearmId: { type: mongoose.Schema.Types.ObjectId, ref: 'Firearm', required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
},
{timeStamps: true}
);



//module.exports = mongoose.model('History', historySchema);
module.exports = historySchema;