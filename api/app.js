import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import path from 'path'
import fs from 'fs'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const routers = fs.readdirSync(path.join(__dirname, 'routers'))
routers.map((route) => {
    app.use('/api', require(`./routers/${route}`).default)
})

export default app