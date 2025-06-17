const mongoose = require('mongoose');

const RewardSchema = new mongoose.Schema(
  {
    candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
    shifts_completed: Number,
    bonus_amount: Number,
  },
  { timestamps: { createdAt: false, updatedAt: 'last_updated' } }
);

module.exports = mongoose.model('Reward', RewardSchema);
