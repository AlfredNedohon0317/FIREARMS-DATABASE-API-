const mongoose =  require('mongoose');
const ManufacturerSchema = require('./manufacturer');
const FirearmSchema = require('./firearm');


const Manufacturer = mongoose.model('Manufacturer', ManufacturerSchema);
const Firearm = mongoose.model('Firearm', FirearmSchema);


module.exports = {
    Manufacturer, 
    Firearm, 
}