import { Query } from './index';
import { Post, MySQL_Res } from '../../utilities';

//Get all posts with their corresponding authors
const GetPosts = async () => Query(`SELECT p.id, p.title, p.content, p.authorid, p._created, a.name
FROM Posts p
JOIN Authors a
ON p.authorid = a.id;`)
//Get a post with it's corresponding author
const GetPost = async (id: Post['id']) => Query(`SELECT p.id, p.title, p.content, p.authorid, p._created, a.name
FROM Posts p
JOIN Authors a
ON p.authorid = a.id
WHERE p.id = ?`, [id])
//Create a new post, requires having selected an author
const CreatePost = async (authorid: Post['authorid'], title: Post['title'], content: Post['content']) => Query<MySQL_Res>(`INSERT INTO Posts ( authorid, title, content ) VALUES (?, ?, ?)`, [authorid, title, content]);
//Update a post
const UpdatePost = async (id: Post['id'], title: Post['title'], content: Post['content']) => Query(`UPDATE Posts SET ( title, content ) VALUES (?, ?) WHERE id = ?`, [title, content, id]);
//Delete a post
const DeletePost = async (id: Post['id']) => Query('DELETE FROM Posts WHERE id = ?', [id]);

export default {
    GetPosts,
    GetPost,
    CreatePost,
    UpdatePost,
    DeletePost
}