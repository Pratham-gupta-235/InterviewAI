const express = require('express');
const { getInterviews, getInterviewById, createInterview } = require('../controllers/interviewController');

const router = express.Router();

router.get('/', getInterviews);
router.get('/:id', getInterviewById);
router.post('/', createInterview);

module.exports = router;
