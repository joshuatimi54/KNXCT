const express = require('express');
const router = express.Router();

const jobController = require('../controllers/jobController');
const candidateController = require('../controllers/candidateController');
const bookingController = require('../controllers/bookingController');
const rewardController = require('../controllers/rewardController');
const systemController = require('../controllers/systemController');

router.get('/', (req, res) => {
  res.send('API is running');
});

/**
 * @swagger
 * /api/jobs:
 *   get:
 *     summary: Retrieve all jobs
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: List of jobs
 *       500:
 *         description: Server error
 */
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
 *       400:
 *         description: Validation error
 */
router.post('/jobs/new', jobController.create);

/**
 * @swagger
 * /api/candidates:
 *   get:
 *     summary: Retrieve all candidates
 *     tags: [Candidates]
 *     responses:
 *       200:
 *         description: List of candidates
 *       500:
 *         description: Server error
 */
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
 *       400:
 *         description: Validation error
 */
router.post('/candidates/register', candidateController.create);
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
 *       400:
 *         description: Validation error
 *       404:
 *         description: Candidate not found
 */
router.put('/candidates/update/:id', candidateController.update);

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Retrieve all bookings
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: List of bookings
 *       500:
 *         description: Server error
 */
router.get('/bookings', bookingController.getAll);
/**
 * @swagger
 * /api/booking:
 *   post:
 *     summary: Create a booking record
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               candidate_id:
 *                 type: string
 *               job_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Booking created
 *       400:
 *         description: Validation error
 */
router.post('/booking', bookingController.create);
/**
 * @swagger
 * /api/booking/confirm:
 *   post:
 *     summary: Confirm a booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               candidate_id:
 *                 type: string
 *               job_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Booking confirmed
 *       400:
 *         description: Validation error
 */
router.post('/booking/confirm', bookingController.confirm);

/**
 * @swagger
 * /api/rewards:
 *   get:
 *     summary: Retrieve all rewards
 *     tags: [Rewards]
 *     responses:
 *       200:
 *         description: List of rewards
 *       500:
 *         description: Server error
 */
router.get('/rewards', rewardController.getAll);
/**
 * @swagger
 * /api/rewards:
 *   post:
 *     summary: Create reward information
 *     tags: [Rewards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               candidate_id:
 *                 type: string
 *               shifts_completed:
 *                 type: integer
 *               bonus_amount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Reward created
 *       400:
 *         description: Validation error
 */
router.post('/rewards', rewardController.create);
/**
 * @swagger
 * /api/rewards/update:
 *   post:
 *     summary: Update reward information
 *     tags: [Rewards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               candidate_id:
 *                 type: string
 *               shifts_completed:
 *                 type: integer
 *               bonus_amount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Reward updated
 *       400:
 *         description: Validation error
 */
router.post('/rewards/update', rewardController.update);

/**
 * @swagger
 * /api/status/check:
 *   get:
 *     summary: System health check
 *     tags: [System]
 *     responses:
 *       200:
 *         description: Status information
 */
router.get('/status/check', systemController.status);

module.exports = router;
