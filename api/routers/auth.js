import { Auth } from "../controllers/auth"
import { Validations } from "../middleware/auth"

export const routers = (app) => {
    app.get('/', (req, res) => {
        res.json({ message: 'Hello Successfully' })
    })
    app.post('/api/auth/signup', Validations.signUpAuth, Auth.signUp)
    app.post('/api/auth/signin', Validations.signInAuth, Auth.signIn)

}