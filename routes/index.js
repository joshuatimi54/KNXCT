const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

// Define routes
router.get('/', controller.home);
router.get('/users', controller.getUsers);
router.post('/users', controller.createUser);

// Export the router
module.exports = router;