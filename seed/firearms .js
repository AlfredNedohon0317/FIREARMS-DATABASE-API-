
const Firearm = require('../models/firearm');

const firearms = [
  {
    name: 'Colt 1911',
    caliber: '.45 acp',
    manufacturerId: '', 
    historyId: '',
    fflType:'none', 
    Image:'',
  },
  {
    name: 'colt model 614 (m16a1) ',
    caliber: '5.56mm',
    manufacturerId: '', 
    historyId: '', 
    fflType: 'class 3 ',
    Image:'',
  },
 
  {
    name: ' ',
    caliber: '',
    manufacturerId: '', 
    historyId: '', 
    fflType: ' ',
    Image:'',
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
