import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { config } from 'dotenv'
config()

export const jwtToken = {
    CreateToken(id, email) {
        const token = jwt.sign({ id, email }, process.env.JWT_TOKEN, { expiresIn: process.env.EXPIRES_IN })
        return token
    },
    VARIFY_TOKEN(token) {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN, { expiresIn: process.env.EXPIRES_IN })
        return decoded
    }

}


export const CreateHashPassword = (password) => bcrypt.hashSync(password, 10);



export const CompareHashPassword = (password, haspassword) => bcrypt.compareSync(password, haspassword)