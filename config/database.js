const mongoose = require('mongoose');
const { MONGODB_URI } = require('./env');

const connect = async () => {
  const uri = MONGODB_URI;
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

module.exports = { connect };
