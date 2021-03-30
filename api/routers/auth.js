import { Auth } from "../controllers/auth"
import { Validations } from "../middleware/auth"
import express from 'express'
const router = express.Router()
router.get('/', (req, res) => {
    res.json({ message: 'Hello Successfully' })
})
router.post('/api/auth/signup', Validations.signUpAuth, Auth.signUp)
router.post('/api/auth/signin', Validations.signInAuth, Auth.signIn)


export default router