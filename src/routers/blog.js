import { getBlogs, getBlog, Update, DeleteBlog, CreateBlog } from '../controllers/blog'
import express from 'express'
const router = express.Router()

router.get('/blogs', getBlogs)
router.post('/blog', CreateBlog)
router.get('/blog/:id', getBlog)
router.put('/blog/:id', Update)
router.delete('/blog/:id', DeleteBlog)
export default router