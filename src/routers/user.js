import { loginUser } from '../controllers/user'
import express from 'express'
const router = express.Router()

router.get('/login', loginUser)

export default router