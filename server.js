const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import path

const firearmRoutes = require('./routes/firearms');
const historyRoutes = require('./routes/history');
const manufacturerRoutes = require('./routes/manufacturers');

const app = express();


app.use(cors());
app.use(bodyParser.json());


app.use('/firearms', firearmRoutes);
app.use('/history', historyRoutes);
app.use('/manufacturers', manufacturerRoutes);


app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017/firearmDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

