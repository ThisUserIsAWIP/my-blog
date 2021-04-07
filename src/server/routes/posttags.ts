import * as express from 'express';
import db from '../db';
let router = express.Router()

//routes get requests for one or all posts
router.get('/:id?', async (req, res) => {
    let id = Number(req.params.id);
    if (!isNaN(id)) {
        let thispostTag = await db.posttags.GetPostTag(id)
        res.json(thispostTag);
    } else {
        let allposttags = await db.posttags.GetPostTags()
        res.json(allposttags);
    }
});

//routes post request for new posts
router.post('/', async (req, res) => {
    let body = req.body
    let myTag = await db.posttags.CreatePostTag(body.postid, body.tagid)
    res.json(myTag);
})

//routes update requests to edit an existing tag
router.put('/:id', async (req, res) => {
    let id = Number(req.params.id);
    let body = req.body
    let tag = await db.posttags.GetPostTag(id)

    if (Object.keys(tag).length === 0) {
        res.sendStatus(404);
        return;
    }
    await db.posttags.UpdatePostTag(body.tagid, body.postid)

    res.sendStatus(200);
})

//delete a tag
router.delete('/:id', async (req, res) => {
    let id = Number(req.params.id);
    await db.posttags.DeletePostTag(id)
    res.sendStatus(200);
});

export default router;