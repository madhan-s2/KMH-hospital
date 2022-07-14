import express from 'express';
import { getFeedBack , createFeedBack }from '../controllers/feedBack.js'

const router = express.Router();

router.get('/',getFeedBack);
router.post('/post',createFeedBack)

export default router;