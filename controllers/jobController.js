const { Job } = require('../models');
const Joi = require('joi');
const { pushToCMS } = require('../utils/cms');

const jobSchema = Joi.object({
  description: Joi.string().required(),
  job_role: Joi.string().required(),
  location: Joi.string().required(),
  posted_by: Joi.string().required(),
  source_url: Joi.string().uri().allow('', null),
  phone: Joi.string().allow('', null),
  company_logo: Joi.string().allow('', null),
  company_name: Joi.string().allow('', null),
  email: Joi.string().email().allow('', null),
  duration: Joi.string().allow('', null),
  rate: Joi.string().allow('', null),
  status: Joi.string().valid('Active', 'Draft').optional()
});

exports.getAll = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json({ success: true, message: 'Action completed', data: jobs });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error retrieving jobs' });
  }
};

exports.create = async (req, res) => {
  try {
    const { error, value } = jobSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    const job = await Job.create(value);
    // push to CMS but don't block response
    pushToCMS(job).catch(() => {});
    res.status(201).json({ success: true, message: 'Action completed', data: job });
  } catch (err) {
    res.status(400).json({ success: false, message: 'Error creating job' });
  }
};
