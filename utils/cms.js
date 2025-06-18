const axios = require('axios');
const { CMS_API_KEY } = require('../config/env');

async function pushToCMS(jobData) {
  if (!CMS_API_KEY) {
    return { success: false, message: 'CMS API key not configured' };
  }
  try {
    const res = await axios.post('https://admin.knxct.com/api/jobs', jobData, {
      headers: { Authorization: `Bearer ${CMS_API_KEY}` }
    });
    return { success: true, data: res.data };
  } catch (err) {
    console.error('CMS push failed:', err.message);
    return { success: false, message: err.message };
  }
}

module.exports = { pushToCMS };
