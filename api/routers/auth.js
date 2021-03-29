import { Auth } from "../controllers/auth"
import auth from "../middleware/auth"

export const routers = (app) => {
    app.get('/', (req, res) => {
        res.json({ message: 'Hello Successfully' })
    })
    app.post('/api/auth/signup', auth, Auth.signUp)

}