
const Manufacturer = require('../models/manufacturer');

const manufacturers = [
  {
    name: 'Colt Manufacting Comapny',
    country: 'USA',
    state: 'CT',
    founded: '1855',

  },
  {
    name: 'Heckler & Koch (H&K)',
    country: 'Germany',
    founded: '1949',
  },
 
];


const seedManufacturers = async () => {
  try {
    await Manufacturer.insertMany(manufacturers);
    console.log('Manufacturers seeded successfully');
  } catch (error) {
    console.error('Error seeding manufacturers:', error.message);
  }
};

module.exports = seedManufacturers;
