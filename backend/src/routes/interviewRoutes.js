const express = require('express');
const { getInterviews, getInterviewById, createInterview } = require('../controllers/interviewController');

// Router-level middleware initialization
const router = express.Router();

router.get('/', getInterviews);
router.get('/:id', getInterviewById);
router.post('/', createInterview);

module.exports = router;
