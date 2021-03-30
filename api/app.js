import express from 'express'
const app = express()
import fs from 'fs'
import path from 'path'
import bodyParser from 'body-parser'


// import { pool } from './db'
import { routers } from './routers/auth'


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



routers(app)

// const routers = fs.readdirSync(path.join(__dirname, 'routers'))
// routers.map((route) => {
//     app.use('/api', require(`./routers/${route}`).default)

// })




export default app