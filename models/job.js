const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    description: String,
    job_role: String,
    location: String,
    posted_by: String,
    source_url: String,
    phone: String,
    company_logo: String,
    company_name: String,
    email: String,
    duration: String,
    rate: String,
    status: { type: String, enum: ['Active', 'Draft'], default: 'Draft' },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model('Job', JobSchema);
