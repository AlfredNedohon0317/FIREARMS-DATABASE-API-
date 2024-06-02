
const Manufacturer = require('../models/manufacturer');

const manufacturers = [
  {
    name: 'Example Manufacturer 1',
    country: 'USA',
    founded: '1950',
  },
  {
    name: 'Example Manufacturer 2',
    country: 'Germany',
    founded: '1930',
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
