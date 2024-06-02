
const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');


router.get('/', historyController.getAllHistory);
router.get('/:id', historyController.getHistoryById);
router.post('/', historyController.createHistory);
router.put('/:id', historyController.updateHistory);
router.delete('/:id', historyController.deleteHistory);

module.exports = router;
