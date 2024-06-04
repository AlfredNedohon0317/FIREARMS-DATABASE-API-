const db =require('../DB')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const {History, Firearm} = require('../models');
const resetCollections = async () => {
  try {
      await History.deleteMany({});
      console.log('All collection reset');
  } catch (error) {
      console.error('Error resetting collections:', error);
  }
};
const main = async() => {
  await resetCollections();
const history = [
  {
    firearmId: '', 
    content: '',
    date: '2022-01-01',
  },
  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },
  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },
  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

  {
    firearmId: '', 
    content: '',
    date: '2022-02-01',
  },

];


await Firearm.insertMany(firearms)
console.log('created some firearms')
}

const run = async()=>{
  await main ()
  db.close()
}
run ()