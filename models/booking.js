const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
  {
    candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
    job_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    status: { type: String, enum: ['Confirmed', 'Pending', 'Cancelled'], default: 'Pending' },
    confirmed_at: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', BookingSchema);
