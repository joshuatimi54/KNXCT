const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema(
  {
    name: String,
    role: String,
    certifications: [String],
    sentinel_card: String,
    location: String,
    phone: String,
    email: String,
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('Candidate', CandidateSchema);
