const fs = require('fs');

const getInterviews = (req, res) => {
    const interviews = JSON.parse(fs.readFileSync('./DB/interview.json', 'utf-8'));
    res.status(200).json({ success: true, count: interviews.length, data: interviews });
};

const getInterviewById = (req, res) => {
    const interviewId = req.params.id;
    res.status(200).json({ success: true, data: { id: interviewId, title: 'Sample Interview', status: 'Pending' } });
};

const createInterview = (req, res) => {
    const { title, type } = req.body;
    if (!title || !type) {
        return res.status(400).json({ success: false, message: 'Please provide title and type' });
    }

    const interviews = JSON.parse(fs.readFileSync('./DB/interview.json', 'utf-8'));

    const newInterview = {
        id: interviews.length + 1,
        title,
        type,
        status: 'Pending'
    };

    interviews.push(newInterview);
    fs.writeFileSync('./DB/interview.json', JSON.stringify(interviews, null, 2));

    res.status(201).json({ success: true, data: newInterview });
};

module.exports = {
    getInterviews,
    getInterviewById,
    createInterview
};
