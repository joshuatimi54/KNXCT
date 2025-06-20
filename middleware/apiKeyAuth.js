const { API_KEY } = require('../config/env');

module.exports = function(req, res, next) {
  const key = req.header('x-api-key');
  if (!API_KEY) {
    console.warn('API_KEY not configured');
  }
  if (!key || key !== API_KEY) {
    return res.status(401).json({ success: false, message: 'Invalid API key' });
  }
  next();
};
