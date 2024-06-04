const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');


const manufacturerController = require('./controllers/manufacturerController'); 
const firearmController = require('./controllers/firearmController'); 
const historyController = require('./controllers/historyController'); 

const app = express();
const PORT = process.env.PORT || 3001;
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

app.get('/historys', historyController.getAllHistorys);
app.get('/historys/:id', historyController.getHistoryById);
app.post('/historys', historyController.createHistory);
app.put('/historys/:id', historyController.updateHistory);
app.delete('/historys/:id', historyController.deleteHistory);

app.use((req, res, next) => {
    res.status(404).send('Sorry, we could not find that resource!');
});

