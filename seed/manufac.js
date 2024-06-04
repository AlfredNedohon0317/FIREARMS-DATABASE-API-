const db = require('../DB'); 
const Manufacturer = require('../models/manufacturer');



const manufacturers = [
  {
    name: 'Colt Manufacting Comapny',
    country: 'USA, Conneticut',
    founded: '1855',

  },
  {
    name: 'Heckler & Koch (H&K)',
    country: 'Germany, Oberndorf',
    founded: '1949',
  },

  {
    name: 'Benelli',
    country: 'italy, urbino',
    founded: '1967',
  },

  {
    name: 'Beretta',
    country: 'italy, Gardone Val Trompia',
    founded: '1949',
  },

  {
    name: 'FN Herstal',
    country: 'belgium, Herstal',
    founded: '1889',
  },

  {
    name: 'Browning Arms Company',
    country: 'USA, Utah',
    founded: '1880',
  },

  {
    name: 'Sig Sauer',
    country: 'Switzerland, Neuhausen am Rheinfall',
    founded: '1853',
  },

  {
    name: 'Mauser',
    country: 'Germany, Oberndorf',
    founded: '1874',
  },

  {
    name: 'remington',
    country: 'USA, North Carolina',
    founded: '1816',
  },

  {
    name: 'Česká zbrojovka Uherský Brod (CZ)',
    country: 'Czechia, Uhersky Brod',
    founded: '1936',
  },

  {
    name: 'Walther',
    country: 'Germany, Zella-mehlis',
    founded: '1886',
  },

  {
    name: 'Winchester',
    country: 'USA, Conneticut',
    founded: '1931',
  },

  {
    name: 'Springfield Armory',
    country: 'USA, Illinois',
    founded: '1794',
  },

  {
    name: 'Armalite',
    country: 'USA, CA',
    founded: '1954',
  },

  {
    name: 'Knight Armament Company (KAC) ',
    country: 'USA, Florida',
    founded: '1982',
  },


  {
    name: 'Kalashnikov Concern (Izh)',
    country: 'Russia, Moscow',
    founded: '1807',
  },

  {
    name: 'Smith & Wesson ',
    country: 'USA, Conneticut',
    founded: '1852',
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
function main() {
  
}
main();