import { Router } from 'express';
import { createTranscription, getAllTranscriptions } from '../controllers/transcriptionController';

const router = Router();

router.post('/', createTranscription);
router.get('/', getAllTranscriptions);

export default router;