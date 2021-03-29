import models from '../models'
import { jwtToken, CreateHashPassword, CompareHashPassword } from '../utils/index'

const { User } = models
export const Auth = {

    async signUp(req, res, next) {
        try {
            const { name, email, password } = req.body

            const hash = CreateHashPassword(password);
            await User.create({ name, email, password: hash })
                .then(user => {
                    user.password = undefined
                    const token = jwtToken.CreateToken(user)
                    return res.status(201).json({ token, user })
                })
        } catch (error) {
            return next(new Error(error))
        }

    },
    async signIn(req, res, next) {
        try {
            const { email, password } = req.body
            await User.findOne({ where: { email } }).then(user => {
                if (!user) {
                    return res.status(400).json({ error: 'User not found with email' })
                }
                if (CompareHashPassword(password, user.password)) {
                    const token = jwtToken.CreateToken(user)
                    user.password = undefined
                    return res.status(200).json({ token, user })

                } else {
                    return res.status(400).json({ error: 'Email and password do not match' })
                }
            })
        } catch (error) {
            return next(new Error(error))

        }

    }

}