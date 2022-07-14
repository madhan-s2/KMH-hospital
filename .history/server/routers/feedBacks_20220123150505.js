import express from 'express';
import { getFeedBack , createFeedBack, deleteFeedBack }from '../controllers/feedBack.js'

const router = express.Router();

router.get('/',getFeedBack);
router.post('/post',createFeedBack);
router.delete('/delete',deleteFeedBack);

export default router;