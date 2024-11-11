const WebSocket = require('ws');
const transcriptionService = require('../services/transcriptionService');

const startWebSocketServer = (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        ws.on('message', async (message) => {
            // Process incoming audio data and transcribe
            const transcriptionText = await transcribeAudio(message); // Assume this function exists
            await transcriptionService.createTranscription(transcriptionText);
            ws.send(JSON.stringify({ transcription: transcriptionText }));
        });
    });

    console.log('WebSocket server started');
};

module.exports = startWebSocketServer;