const db = require('../db'); 
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const {Manufacturer} = require('../models');
const resetCollections = async () => {
  try {
      await Manufacturer.deleteMany({});
      console.log('All collection reset');
  } catch (error) {
      console.error('Error resetting collections:', error);
  }
};
const main= async() =>{
  await resetCollections();
const manufacturers = [
  {
    Name: 'Colt Manufacting Company',
    country: 'USA, Conneticut',
    founded: '1855',

  },
  {
    Name: 'Heckler & Koch (H&K)',
    country: 'Germany, Oberndorf',
    founded: '1949',
  },

  {
    Name: 'Benelli',
    country: 'italy, urbino',
    founded: '1967',
  },

  {
    Name: 'Beretta',
    country: 'italy, Gardone Val Trompia',
    founded: '1949',
  },

  {
    Name: 'FN Herstal',
    country: 'belgium, Herstal',
    founded: '1889',
  },

  {
    Name: 'Browning Arms Company',
    country: 'USA, Utah',
    founded: '1880',
  },

  {
    Name: 'Sig Sauer',
    country: 'Switzerland, Neuhausen am Rheinfall',
    founded: '1853',
  },

  {
    Name: 'Mauser',
    country: 'Germany, Oberndorf',
    founded: '1874',
  },

  {
    Name: 'Remington',
    country: 'USA, North Carolina',
    founded: '1816',
  },

  {
    Name: 'Česká zbrojovka Uherský Brod (CZ)',
    country: 'Czechia, Uhersky Brod',
    founded: '1936',
  },

  {
    Name: 'Walther',
    country: 'Germany, Zella-mehlis',
    founded: '1886',
  },

  {
    Name: 'Winchester',
    country: 'USA, Conneticut',
    founded: '1931',
  },

  {
    Name: 'Springfield Armory',
    country: 'USA, Illinois',
    founded: '1794',
  },

  {
    Name: 'Armalite',
    country: 'USA, CA',
    founded: '1954',
  },

  {
    Name: 'Knight Armament Company (KAC)',
    country: 'USA, Florida',
    founded: '1982',
  },


  {
    Name: 'Kalashnikov Concern (Izh)',
    country: 'Russia, Moscow',
    founded: '1807',
  },

  {
    Name: 'Smith & Wesson',
    country: 'USA, Conneticut',
    founded: '1852',
  },


  {
    Name: 'Ruger',
    country: 'USA, Conneticut',
    founded: '1949',
  },

  {
    Name: 'Glock',
    country: 'Austria, Deutsch-Wagram',
    founded: '1982',
  },
 
];
await Manufacturer.insertMany(manufacturers)
console.log("cap and ball")
}

const run = async () => {
  await main ()
  db.close()
}
  run();