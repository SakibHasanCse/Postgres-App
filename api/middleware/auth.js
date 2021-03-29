import { User } from '../models'
import validator from 'validator'


export const Validations = {

    async signUpAuth(req, res, next) {
        const { name, email, password } = req.body
        if (!validator.isEmail) {
            return res.status(400).json({ error: 'Email is not valid' })
        }
        if (!name) {
            return res.status(400).json({ error: 'Name is required' })
        }
        if (!email) {
            return res.status(400).json({ error: 'Email is required' })
        }
        if (!password) {
            return res.status(400).json({ error: 'Password is required' })
        }

        const user = await User.findOne({ where: { email } })
        if (!user) {
            next();
        } else {
            console.log(user)
            return res.status(400).json({ error: 'Email already exists' })

        }
    },
    async signInAuth(req, res, next) {
        const { email, password } = req.body
        if (!validator.isEmail) {
            return res.status(400).json({ error: 'Email is not valid' })
        }
        if (!email) {
            return res.status(400).json({ error: 'Email is required' })
        }
        if (!password) {
            return res.status(400).json({ error: 'Password is required' })
        }
        next();
    },

}