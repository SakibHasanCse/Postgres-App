import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import path from 'path'
import fs from 'fs'
import cors from 'cors'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
const routers = fs.readdirSync(path.join(__dirname, 'routers'))
routers.map((route) => {
    app.use('/api', require(`./routers/${route}`).default)
})

export default app