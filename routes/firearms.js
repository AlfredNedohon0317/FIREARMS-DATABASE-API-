const express = require('express');
const router = express.Router(); //This line imports the Express module, 
//which is a web application framework for Node.js. Express simplifies the process of handling HTTP requests, building APIs, and managing web servers.
const firearmController = require('../controllers/firearmController');


router.get('/', firearmController.getAllFirearms);
router.get('/:id', firearmController.getFirearmById);
router.post('/', firearmController.createFirearm);
router.put('/:id', firearmController.updateFirearm);
router.delete('/:id', firearmController.deleteFirearm);

module.exports = router;
