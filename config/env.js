const dotenv = require('dotenv');

// Load environment variables from a .env file if present
dotenv.config();

module.exports = {
  PORT: process.env.PORT || '3000',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://joshuatimi54:Joshua21@knxct.ird4tcj.mongodb.net/KNXCT?retryWrites=true&w=majority&appName=KNXCT',
  CMS_API_KEY: process.env.CMS_API_KEY,
  API_KEY: process.env.API_KEY
};
