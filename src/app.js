import express, { json, urlencoded } from 'express';
const app = express();
import transcriptionRoutes from './routes/transcriptionRoutes';
import startWebSocketServer from './utils/websocketServer';
import startGrpcServer from './utils/grpcServer';

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use('/api/transcriptions', transcriptionRoutes);

const server = app.listen(8080, () => {
    console.log('Server started on port 8080');
    startWebSocketServer(server);
    startGrpcServer();
});