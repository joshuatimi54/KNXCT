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
/**
 * @swagger
 * /api/jobs/new:
 *   post:
 *     summary: Create a new job entry
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       201:
 *         description: Job created
 */
router.post('/api/jobs/new', jobController.create);

router.get('/candidates', candidateController.getAll);
/**
 * @swagger
 * /api/candidates/register:
 *   post:
 *     summary: Register a new candidate
 *     tags: [Candidates]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Candidate'
 *     responses:
 *       201:
 *         description: Candidate created
 */
router.post('/api/candidates/register', candidateController.create);
/**
 * @swagger
 * /api/candidates/update/{id}:
 *   put:
 *     summary: Update candidate information
 *     tags: [Candidates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Candidate ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Candidate'
 *     responses:
 *       200:
 *         description: Candidate updated
 */
router.put('/api/candidates/update/:id', candidateController.update);

router.get('/bookings', bookingController.getAll);
router.post('/bookings', bookingController.create);

router.get('/rewards', rewardController.getAll);
router.post('/rewards', rewardController.create);

module.exports = router;
