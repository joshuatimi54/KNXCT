const { Reward } = require('../models');
const Joi = require('joi');

const rewardSchema = Joi.object({
  candidate_id: Joi.string().required(),
  shifts_completed: Joi.number().integer().min(0).optional(),
  bonus_amount: Joi.number().optional()
});

exports.getAll = async (req, res) => {
  try {
    const items = await Reward.find().populate('candidate_id');
    res.json({ success: true, message: 'Action completed', data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error retrieving rewards' });
  }
};

exports.create = async (req, res) => {
  try {
    const { error, value } = rewardSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    const item = await Reward.create(value);
    res.status(201).json({ success: true, message: 'Action completed', data: item });
  } catch (err) {
    res.status(400).json({ success: false, message: 'Error creating reward' });
  }
};

exports.update = async (req, res) => {
  try {
    const { error, value } = rewardSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    const updated = await Reward.findOneAndUpdate(
      { candidate_id: value.candidate_id },
      value,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json({ success: true, message: 'Action completed', data: updated });
  } catch (err) {
    res.status(400).json({ success: false, message: 'Error updating reward' });
  }
};
