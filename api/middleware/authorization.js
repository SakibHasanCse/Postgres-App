import { User } from '../models'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()

export default (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: 'you are not authorized' })
    }
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.JWT_TOKEN, { expiresIn: process.env.EXPIRES_IN }, (err, decoded) => {
        if (err) {
            res.status(401).json({ error: err })
        } else {
            req.decoded = decoded

            console.log(decoded)
            User.findByPk(decoded.userId)
                .then(user => {
                    if (!user) {
                        return res.status(400).json({ error: 'User not found' })
                    }
                    next();
                })
        }
    })

}