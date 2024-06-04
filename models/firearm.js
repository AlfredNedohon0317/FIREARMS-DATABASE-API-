
const {Schema}= require('mongoose')
//const mongoose = require('mongoose');

const firearmSchema = new mongoose.Schema({
  name: { type: String, required: true },
  caliber: { type: String, required: true },
  manufacturerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Manufacturer', required: true },
  //historyId: { type: mongoose.Schema.Types.ObjectId, ref: 'History' },
  fflType: { type: String, required: true },
  Image: {type:String,required:true}
},
{timestamps:true }
);


module.exports = firearmSchema
// module.exports = mongoose.model('Firearm', firearmSchema);