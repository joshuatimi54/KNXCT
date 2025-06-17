const { Candidate } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const items = await Candidate.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving candidates', err });
  }
};

exports.create = async (req, res) => {
  try {
    const item = await Candidate.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: 'Error creating candidate', err });
  }
};
