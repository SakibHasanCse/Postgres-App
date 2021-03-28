import express from 'express'
const app = express()
import fs from 'fs'
import path from 'path'
import blog from './routers/blog'
import user from './routers/user'

import { pool } from './db'

app.use(express.json())


const routers = fs.readdirSync(path.join(__dirname, 'routers'))
routers.map((route) => {
    app.use('/api', require(`./routers/${route}`).default)

})




export default app