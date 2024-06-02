
const express = require('express');
const mongoose = require('mongoose');
const app = express();


const firearmsRouter = require('./routes/firearms');
const manufacturersRouter = require('./routes/manufacturers');
const historyRouter = require('./routes/history');


app.use(express.json());


app.use('/firearms', firearmsRouter);
app.use('/manufacturers', manufacturersRouter);
app.use('/history', historyRouter);


const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/firearmpedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});
