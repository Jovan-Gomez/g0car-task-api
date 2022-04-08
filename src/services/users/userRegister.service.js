'use strict'

import 'colors'
import User from '../../mongoose/models/User.js'
import { generateId, responseRequest } from '../../utils/index.js'

const userRegister = async ({ fullName, nickname, email, password }) => {
	try {
		if (!fullName || !email || !password) {
			return responseRequest(400, null, 'All fields are required')
		}

		const userExists = await User.findOne({ email })
		if (userExists) return responseRequest(400, null, 'User already registered')

		const user = new User({ fullName, nickname, email, password })
		user.token = generateId()
		await user.save()
		return responseRequest(201, user, 'POST /users successfuly')
	} catch (error) {
		console.log(`[Service/userRegister] ${error.message}`.red)
		throw new Error(error.message)
	}
}

export default userRegister
