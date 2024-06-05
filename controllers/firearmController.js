const { Firearm } = require('../models');
const db = require('../db');
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const getAllFirearms = async (req, res) => {
  try {
    const searchTerm = req.query.name;
    let firearms;
    
    if (searchTerm) {
      firearms = await Firearm.find({ name: new RegExp(searchTerm, 'i') }); // case-insensitive search
    } else {
      firearms = await Firearm.find();
    }

    res.json(firearms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFirearmById = async (req, res) => {
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

const createFirearm = async (req, res) => {
  const firearm = new Firearm({
    name: req.body.name,
    caliber: req.body.caliber,
    manufacturerId: req.body.manufacturerId,
    history: req.body.history,
    image: req.body.image
  });

  try {
    const newFirearm = await firearm.save();
    res.status(201).json(newFirearm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateFirearm = async (req, res) => {
  try {
    const firearm = await Firearm.findById(req.params.id);
    if (!firearm) {
      return res.status(404).json({ message: 'Firearm not found' });
    }
    
    firearm.name = req.body.name;
    firearm.caliber = req.body.caliber;
    firearm.manufacturerId = req.body.manufacturerId;
    firearm.history = req.body.history;
    firearm.image = req.body.image;

    const updatedFirearm = await firearm.save();
    res.json(updatedFirearm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteFirearm = async (req, res) => {
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

module.exports = { 
  getAllFirearms,
  getFirearmById,
  createFirearm,
  updateFirearm,
  deleteFirearm,
};
