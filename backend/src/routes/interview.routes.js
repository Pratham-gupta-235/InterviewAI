const express = require('express');
const { getInterviews, getInterviewById, createInterview } = require('../controllers/interview.controller');


const router = express();

router.get('/', getInterviews);
router.get('/:id', getInterviewById);
router.post('/', createInterview);

module.exports = router;
