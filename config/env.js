const dotenv = require('dotenv');

// Load environment variables from a .env file if present
dotenv.config();

module.exports = {
  PORT: process.env.PORT || '3000',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase'
};
