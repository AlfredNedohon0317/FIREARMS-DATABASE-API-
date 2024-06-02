const History = require('../models/history');

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
 
];


const seedHistory = async () => {
  try {
    await History.insertMany(history);
    console.log('History seeded successfully');
  } catch (error) {
    console.error('Error seeding history:', error.message);
  }
};

module.exports = seedHistory;
