const mongoose =  require('mongoose');
const ManufacturerSchema = require('./manufacturer');
const FirearmSchema = require('./firearm');
// const HistorySchema = require('./history');

const Manufacturer = mongoose.model('Manufacturer', ManufacturerSchema);
const Firearm = mongoose.model('Firearm', FirearmSchema);
// const History = mongoose.model('History', HistorySchema);

module.exports = {
    Manufacturer, 
    Firearm, 
    // History 
}