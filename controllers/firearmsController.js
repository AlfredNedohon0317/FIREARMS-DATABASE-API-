const Firearm = require('../models/firearm');




exports.getAllFirearms = async (req, res) => {
  try {
    const firearms = await Firearm.find();
    res.json(firearms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getFirearmById = async (req, res) => {
  try {
    const firearm = await Firearm.findById(req.params.id);
    if (!firearm) {
      return res.status(404).json({ message: 'Firearm not found' });
    }
    res.json(firearm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.createFirearm = async (req, res) => {
  const firearm = new Firearm({
    name: req.body.name,
    caliber: req.body.caliber,
    manufacturerId: req.body.manufacturerId,
    historyId: req.body.historyId,
  });

  try {
    const newFirearm = await firearm.save();
    res.status(201).json(newFirearm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateFirearm = async (req, res) => {
  try {
    const firearm = await Firearm.findById(req.params.id);
    if (!firearm) {
      return res.status(404).json({ message: 'Firearm not found' });
    }
    
    firearm.name = req.body.name;
    firearm.caliber = req.body.caliber;
    firearm.manufacturerId = req.body.manufacturerId;
    firearm.historyId = req.body.historyId;

    const updatedFirearm = await firearm.save();
    res.json(updatedFirearm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteFirearm = async (req, res) => {
  try {
    const firearm = await Firearm.findById(req.params.id);
    if (!firearm) {
      return res.status(404).json({ message: 'Firearm not found' });
    }
    await firearm.remove();
    res.json({ message: 'Firearm deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
