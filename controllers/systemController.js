const mongoose = require('mongoose');

exports.status = async (req, res) => {
  const dbState = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({
    success: true,
    message: 'Action completed',
    data: {
      database: dbState,
      timestamp: new Date().toISOString()
    }
  });
};
