import * as express from 'express';
import authorsRouter from './authors';
import postsRouter from './posts';
import tagsRouter from './tags';
import posttagsRouter from './posttags'

let router = express.Router();

//directing site traffic to correct router
router.use('/api/authors', authorsRouter);
router.use('/api/posts', postsRouter);
router.use('/api/tags', tagsRouter);
router.use('/api/posttags', posttagsRouter)

export default router;