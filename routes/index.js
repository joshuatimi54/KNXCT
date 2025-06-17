const express = require('express');
const router = express.Router();

const jobController = require('../controllers/jobController');
const candidateController = require('../controllers/candidateController');
const bookingController = require('../controllers/bookingController');
const rewardController = require('../controllers/rewardController');

router.get('/', (req, res) => {
  res.send('API is running');
});

router.get('/jobs', jobController.getAll);
router.post('/jobs', jobController.create);

router.get('/candidates', candidateController.getAll);
router.post('/candidates', candidateController.create);

router.get('/bookings', bookingController.getAll);
router.post('/bookings', bookingController.create);

router.get('/rewards', rewardController.getAll);
router.post('/rewards', rewardController.create);

module.exports = router;
