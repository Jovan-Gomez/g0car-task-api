'use strict'

import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import 'colors'

const connection = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
		})
		const host = connect.connection.host
		const port = connect.connection.port
		console.log('[connection] '.magenta + `${host}:${port}`.yellow)
	} catch (error) {
		console.log(`[connection] ${error}`.red)
		process.exit(1)
	}
}

export { connection }
