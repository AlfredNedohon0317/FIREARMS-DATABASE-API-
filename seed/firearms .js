
const Firearm = require('../models/firearm');

const firearms = [
  {
    name: 'Colt 1911',
    caliber: '.45 acp',
    manufacturerId: '', 
    historyId: '',
    fflType 
  },
  {
    name: 'colt m16 ',
    caliber: '5.56mm',
    manufacturerId: '', 
    historyId: '', 
    fflType
  },
 
];


const seedFirearms = async () => {
  try {
    await Firearm.insertMany(firearms);
    console.log('Firearms seeded successfully');
  } catch (error) {
    console.error('Error seeding firearms:', error.message);
  }
};

module.exports = seedFirearms;
