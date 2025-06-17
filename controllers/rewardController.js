const { Reward } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const items = await Reward.find().populate('candidate_id');
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving rewards', err });
  }
};

exports.create = async (req, res) => {
  try {
    const item = await Reward.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: 'Error creating reward', err });
  }
};
