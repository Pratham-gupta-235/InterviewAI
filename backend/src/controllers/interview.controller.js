const fs = require('fs');

const getInterviews = (req, res) => {
    try {
        const interviews = JSON.parse(fs.readFileSync('./DB/interview.json', 'utf-8'));
        res.status(200).json({ success: true, data: interviews });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to retrieve interviews' });
    }
};

const getInterviewById = (req, res) => {
    try {
        const interviews = JSON.parse(fs.readFileSync('./DB/interview.json', 'utf-8'));
        const interview = interviews.find(i => i.id === parseInt(req.params.id));
        if (!interview) {
            return res.status(404).json({ success: false, message: 'Interview not found' });
        }
        res.status(200).json({ success: true, data: interview });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to retrieve interview' });
    };
}

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

        try {
            fs.writeFileSync('./DB/interview.json', JSON.stringify(interviews));
            res.status(201).json({ success: true, data: newInterview });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Failed to create interview' });
        }
    };

    module.exports = {
        getInterviews,
        getInterviewById,
        createInterview
    };
