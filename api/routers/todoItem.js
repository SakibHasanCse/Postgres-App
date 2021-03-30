import { Validations } from "../middleware/auth"
import Authorization from '../middleware/authorization'
import express from 'express'
import { todoitem } from "../controllers/todoitem"
const router = express.Router()

router.post('/todoItems', Authorization, todoitem.create)
router.get('/todos/:todoId/todoItems', Authorization, todoitem.fetchAll)
router.get('/todos/todoItems/:todoItemId', Authorization, todoitem.fetchOne)
router.put('/todos/todoItems/:todoItemId', Authorization, todoitem.update)
router.delete('/todos/todoItems/:todoItemId', Authorization, todoitem.delete)



export default router