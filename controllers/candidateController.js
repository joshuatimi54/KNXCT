const { Candidate } = require('../models');
const Joi = require('joi');

const candidateSchema = Joi.object({
  name: Joi.string().required(),
  role: Joi.string().required(),
  certifications: Joi.array().items(Joi.string()).default([]),
  sentinel_card: Joi.string().allow('', null),
  location: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required()
});

exports.getAll = async (req, res) => {
  try {
    const items = await Candidate.find();
    res.json({ success: true, message: 'Action completed', data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error retrieving candidates' });
  }
};

exports.create = async (req, res) => {
  try {
    const { error, value } = candidateSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    const item = await Candidate.create(value);
    res.status(201).json({ success: true, message: 'Action completed', data: item });
  } catch (err) {
    res.status(400).json({ success: false, message: 'Error creating candidate' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { error, value } = candidateSchema.validate(req.body, { presence: 'optional' });
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    const updated = await Candidate.findByIdAndUpdate(id, value, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Candidate not found' });
    }
    res.json({ success: true, message: 'Action completed', data: updated });
  } catch (err) {
    res.status(400).json({ success: false, message: 'Error updating candidate' });
  }
};
