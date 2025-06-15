const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');

const sequelize = new Sequelize(config.databaseUrl, {
  dialect: 'mongodb',
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Define your models here
db.User = require('./User')(sequelize, DataTypes);
// Add other models as needed

module.exports = db;