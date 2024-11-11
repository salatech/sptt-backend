const transcriptionService = require('../services/transcriptionService');

const createTranscription = async (req, res) => {
    try {
        const { text } = req.body;
        const transcription = await transcriptionService.createTranscription(text);
        res.status(201).json(transcription);
    } catch (error) {
        res.status(500).json({ message: 'Error creating transcription', error });
    }
};

const getAllTranscriptions = async (req, res) => {
    try {
        const transcriptions = await transcriptionService.getAllTranscriptions();
        res.status(200).json(transcriptions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transcriptions', error });
    }
};

module.exports = {
    createTranscription,
    getAllTranscriptions,
};