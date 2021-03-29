import models from '../models'
import { jwtToken, CreateHashPassword, CompareHashPassword } from '../utils/index'

const { User } = models
export const Auth = {

    async signUp(req, res, next) {
        try {
            const { name, email, password } = req.body
            console.log(req.body)
            const hash = CreateHashPassword(password);
            console.log(hash)
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

}