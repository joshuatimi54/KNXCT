const { Booking } = require('../models');
const Joi = require('joi');

const bookingSchema = Joi.object({
  candidate_id: Joi.string().required(),
  job_id: Joi.string().required()
});

exports.getAll = async (req, res) => {
  try {
    const items = await Booking.find()
      .select('_id candidate_id job_id confirmed_at createdAt status updatedAt');
    res.json({ success: true, message: 'Action completed', data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error retrieving bookings' });
  }
};

exports.create = async (req, res) => {
  try {
    const { error, value } = bookingSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    const item = await Booking.create(value);
    res.status(201).json({ success: true, message: 'Action completed', data: item });
  } catch (err) {
    res.status(400).json({ success: false, message: 'Error creating booking' });
  }
};

exports.confirm = async (req, res) => {
  try {
    const { error, value } = bookingSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    const booking = await Booking.findOneAndUpdate(
      { candidate_id: value.candidate_id, job_id: value.job_id },
      { status: 'Confirmed', confirmed_at: new Date() },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json({ success: true, message: 'Action completed', data: booking });
  } catch (err) {
    res.status(400).json({ success: false, message: 'Error confirming booking' });
  }
};
