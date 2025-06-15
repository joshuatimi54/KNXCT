const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydatabase', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Disable logging; default: console.log
  define: {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;