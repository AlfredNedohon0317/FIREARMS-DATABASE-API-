// const express = require('express');

// const bodyParser = require('body-parser');
// const logger = require('morgan');
// const cors = require('cors');
// const db = require('./db');
// const manufacturerController = require('./controllers/manufacturerController'); 
// const firearmController = require('./controllers/firearmController'); 
// const app = express();

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//                 console.log(`Server is running on port ${PORT}`);
//             });
// app.use(bodyParser.json());
// app.use(logger('dev'));
// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Welcome to the Firearm Database');
// });


// app.get('/manufacturers', manufacturerController.getAllManufacturers);
// app.get('/manufacturers/:id', manufacturerController.getManufacturerById);
// app.post('/manufacturers', manufacturerController.createManufacturer);
// app.put('/manufacturers/:id', manufacturerController.updateManufacturer);
// app.delete('/manufacturers/:id', manufacturerController.deleteManufacturer);

// app.get('/firearms', firearmController.getAllFirearms);
// app.get('/firearms/:id', firearmController.getFirearmById);
// app.post('/firearms', firearmController.createFirearm);
// app.put('/firearms/:id', firearmController.updateFirearm);
// app.delete('/firearms/:id', firearmController.deleteFirearm);
// app.get('/firearms/:name',firearmController.getFirearmByName);
// app.use((req, res, next) => {
//     res.status(404).send('Sorry, we could not find that resource!');
// });




const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const db = require('./db');
const manufacturerController = require('./controllers/manufacturerController'); 
const firearmController = require('./controllers/firearmController'); 
const app = express();

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PORT = process.env.PORT || 3990;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Firearm Database');
});

app.get('/manufacturers', manufacturerController.getAllManufacturers);
app.get('/manufacturers/:id', manufacturerController.getManufacturerById);
app.post('/manufacturers', manufacturerController.createManufacturer);
app.put('/manufacturers/:id', manufacturerController.updateManufacturer);
app.delete('/manufacturers/:id', manufacturerController.deleteManufacturer);

app.get('/firearms', firearmController.getAllFirearms);
app.get('/firearms/:id', firearmController.getFirearmById);
app.post('/firearms', firearmController.createFirearm);
app.put('/firearms/:id', firearmController.updateFirearm);
app.delete('/firearms/:id', firearmController.deleteFirearm);

app.use((req, res, next) => {
    res.status(404).send('Sorry, we could not find that resource!');
});
