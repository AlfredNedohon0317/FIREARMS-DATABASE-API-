const History = require('../models/history');




exports.getAllHistory = async (req, res) => {
  try {
    const history = await History.find();
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getHistoryById = async (req, res) => {
  try {
    const history = await History.findById(req.params.id);
    if (!history) {
      return res.status(404).json({ message: 'History not found' });
    }
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.createHistory = async (req, res) => {
  const history = new History({
    firearmId: req.body.firearmId,
    content: req.body.content,
    date: req.body.date,
  });

  try {
    const newHistory = await history.save();
    res.status(201).json(newHistory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.updateHistory = async (req, res) => {
  try {
    const history = await History.findById(req.params.id);
    if (!history) {
      return res.status(404).json({ message: 'History not found' });
    }
    
    history.firearmId = req.body.firearmId;
    history.content = req.body.content;
    history.date = req.body.date;

    const updatedHistory = await history.save();
    res.json(updatedHistory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteHistory = async (req, res) => {
  try {
    const history = await History.findById(req.params.id);
    if (!history) {
      return res.status(404).json({ message: 'History not found' });
    }
    await history.remove();
    res.json({ message: 'History deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
