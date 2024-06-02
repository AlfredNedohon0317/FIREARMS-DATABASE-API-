const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/firearmpedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

module.exports = {
  Firearm: require('./models/firearm'),
  Manufacturer: require('./models/manufacturer'),
  History: require('./models/history'),
};
