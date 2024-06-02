const Manufacturer = require('../models/manufacturer');




exports.getAllManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find();
    res.json(manufacturers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getManufacturerById = async (req, res) => {
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


exports.createManufacturer = async (req, res) => {
  const manufacturer = new Manufacturer({
    name: req.body.name,
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


exports.updateManufacturer = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findById(req.params.id);
    if (!manufacturer) {
      return res.status(404).json({ message: 'Manufacturer not found' });
    }
    
    manufacturer.name = req.body.name;
    manufacturer.country = req.body.country;
    manufacturer.founded = req.body.founded;

    const updatedManufacturer = await manufacturer.save();
    res.json(updatedManufacturer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteManufacturer = async (req, res) => {
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
