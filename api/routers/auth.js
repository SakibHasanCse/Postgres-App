import { Auth } from "../controllers/auth"

export const routers = (app) => {
    app.get('/', (req, res) => {
        res.json({ message: 'Hello Successfully' })
    })
    app.post('/api/auth/signup', Auth.signUp)
}