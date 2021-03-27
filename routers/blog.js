import { getBlog } from '../controllers/blog'
import express from 'express'
const router = express.Router()

router.get('/blog', getBlog)

export default router