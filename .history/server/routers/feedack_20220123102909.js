import express from 'express';
import { getPosts , createPost }from '../controllers/feedBack.js'

const router = express.Router();

router.get('/',getPosts );
router.post('/post',createPost)

export default router;