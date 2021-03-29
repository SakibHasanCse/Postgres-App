import { User } from '../models/index'


export default async(req, res, next) => {
    const { name, email, password } = req.body
    if (!name) {
        return res.status(400).json({ error: 'Name is required' })
    }
    if (!email) {
        return res.status(400).json({ error: 'Email is required' })
    }
    if (!password) {
        return res.status(400).json({ error: 'Password is required' })
    }

    const user = User.findOne({ where: { email: email } })
    if (user) {
        return res.status(400).json({ error: 'Email already exists' })
    }
    next();
}