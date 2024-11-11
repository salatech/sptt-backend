const connectDB = require('./config/db');
const app = require('./app'); // Import the Express app

const startServer = async () => {
    // Connect to the database
    await connectDB();

    // Start the Express server
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();


const express = require('express');
const cors = require('cors');
const transcriptionRoutes = require('./routes/transcriptionRoutes');
const startWebSocketServer = require('./utils/websocketServer');
const startGrpcServer = require('./utils/grpcServer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/transcriptions', transcriptionRoutes);

// Export the Express app
module.exports = app;