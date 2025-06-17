const { Booking } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const items = await Booking.find().populate('candidate_id job_id');
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving bookings', err });
  }
};

exports.create = async (req, res) => {
  try {
    const item = await Booking.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: 'Error creating booking', err });
  }
};
