import express from 'express'
import morgan from 'morgan'
import 'colors'

import { connection } from './src/mongoose/index.js'
import routes from './src/routes/index.js'

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan(process.env.ENVIROMENT === 'production' ? 'common' : 'dev'))

//Database connection
connection()

//Routing
app.use('/api', routes)
app.listen(PORT, () => {
	console.log('[server] listen in http://localhost:'.cyan + `${PORT}`.yellow)
})
