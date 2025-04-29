const express = require('express');
const router = express.Router();
const { getRandomActivity } = require('../controllers/activityController');

// GET /activity
router.get('/', getRandomActivity);

module.exports = router;
