const express = require('express');
const router = express.Router();
const firearmController = require('../controllers/firearmController');


router.get('/', firearmController.getAllFirearms);
router.get('/:id', firearmController.getFirearmById);
router.post('/', firearmController.createFirearm);
router.put('/:id', firearmController.updateFirearm);
router.delete('/:id', firearmController.deleteFirearm);

module.exports = router;
