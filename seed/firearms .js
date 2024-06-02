// firearms.js
const Firearm = require('../models/firearm');

const firearms = [
  {
    name: 'Example Firearm 1',
    caliber: '9mm',
    manufacturerId: '611f7f3edf3e512d0c0970fd', // Replace with actual manufacturer ID
    historyId: '611f7f3edf3e512d0c0970fe', // Replace with actual history ID
  },
  {
    name: 'Example Firearm 2',
    caliber: '5.56mm',
    manufacturerId: '611f7f3edf3e512d0c0970fd', // Replace with actual manufacturer ID
    historyId: '611f7f3edf3e512d0c0970fe', // Replace with actual history ID
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
