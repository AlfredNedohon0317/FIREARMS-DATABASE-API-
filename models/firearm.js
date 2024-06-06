
const {Schema}= require('mongoose')


const firearmSchema = new Schema({
  name: { type: String, required: true },
  caliber: { type: String, required: false },
  Manufacturer:{type: String, required:false },
  manufacturerId: { type: Schema.Types.ObjectId, ref: 'Manufacturer', required: true },
  history: { type: String, required: false },
  Ownership: { type: String, required: false },
  Image: {type:String,required:false}
},
{timestamps:true }
);



module.exports = firearmSchema
 