import express from 'express'
const app = express()
import fs from 'fs'
import path from 'path'
import blog from './routers/blog'
import user from './routers/user'

import { pool } from './db'

app.use(express.json())

app.post('/', async(req, res) => {
    const { description } = req.body
    const newTOdo = await pool.query(
        "INSERT INTO todo (description) VALUES($1) RETURNING *", [description]
    )
    console.log(newTOdo)
    return res.json(newTOdo.rows[0])
})

const routers = fs.readdirSync(path.join(__dirname, 'routers'))
routers.map((route) => {
    app.use('/api', require(`./routers/${route}`).default)

})



app.listen(3000, () => {
    console.log('listening on 3000')
})