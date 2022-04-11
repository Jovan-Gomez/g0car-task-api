'use strict'

import 'colors'
import User from '../../mongoose/models/User.js'
import { responseRequest } from '../../utils/index.js'

const allUsersService = async () => {
	try {
		const users = await User.find({}, { _id: 0, password: 0, __v: 0 })
		return responseRequest(200, users, 'GET /users successfuly')
	} catch (error) {
		console.log(`[Service/allUsersService] ${error}`.red)
		throw new Error(error.message)
	}
}

export default allUsersService
