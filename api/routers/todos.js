import { Validations } from "../middleware/auth"
import Authorization from '../middleware/authorization'
import express from 'express'
import { Todos } from "../controllers/todos"
const router = express.Router()

router.post('/todo', Authorization, Todos.create)
router.get('/todos', Authorization, Todos.fetchAll)
router.get('/todo/:id', Authorization, Todos.fetchOne)
router.put('/todo/:id', Authorization, Todos.update)
router.delete('/todo/:id', Authorization, Todos.delete)



export default router