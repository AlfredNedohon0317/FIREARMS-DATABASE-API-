const {Manufacturer} = require('../models');
const db = require('../db');
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getAllManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find();
    res.json(manufacturers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


 const getManufacturerById = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findById(req.params.id);
    if (!manufacturer) {
      return res.status(404).json({ message: 'Manufacturer not found' });
    }
    res.json(manufacturer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


 const createManufacturer = async (req, res) => {
  const manufacturer = new Manufacturer({
    Name: req.body.Name,
    country: req.body.country,
    founded: req.body.founded,
  });

  try {
    const newManufacturer = await manufacturer.save();
    res.status(201).json(newManufacturer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


 const updateManufacturer = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findById(req.params.id);
    if (!manufacturer) {
      return res.status(404).json({ message: 'Manufacturer not found' });
    }
    
    manufacturer.Name = req.body.Name;
    manufacturer.country = req.body.country;
    manufacturer.founded = req.body.founded;

    const updatedManufacturer = await manufacturer.save();
    res.json(updatedManufacturer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


 const deleteManufacturer = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findById(req.params.id);
    if (!manufacturer) {
      return res.status(404).json({ message: 'Manufacturer not found' });
    }
    await manufacturer.remove();
    res.json({ message: 'Manufacturer deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports={
  getAllManufacturers,
  getManufacturerById,
  createManufacturer, 
  updateManufacturer,
  deleteManufacturer,
}