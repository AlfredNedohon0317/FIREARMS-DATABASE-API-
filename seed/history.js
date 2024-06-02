const History = require('../models/history');

const history = [
  {
    firearmId: '611f7f3edf3e512d0c0970ff', 
    content: 'Example history content for firearm 1',
    date: '2022-01-01',
  },
  {
    firearmId: '611f7f3edf3e512d0c097100', 
    content: 'Example history content for firearm 2',
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
