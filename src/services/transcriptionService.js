const Transcription = require('../models/transcriptionModel');

const createTranscription = async (text) => {
    const transcription = new Transcription({ text });
    return await transcription.save();
};

const getAllTranscriptions = async () => {
    return await Transcription.find();
};

module.exports = {
    createTranscription,
    getAllTranscriptions,
};