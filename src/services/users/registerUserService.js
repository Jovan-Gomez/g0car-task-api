'use strict'

import 'colors'
import User from '../../mongoose/models/User.js'
import { generateId, responseRequest } from '../../utils/index.js'

const registerUserService = async ({ fullName, nickname, email, password }) => {
	const userExists = await User.findOne({ email })
	if (userExists) return responseRequest(400, null, 'User already registered')
	try {
		const user = new User({ fullName, nickname, email, password })
		user.token = generateId()
		await user.save()
		return responseRequest(201, user, 'POST /users successfully')
	} catch (error) {
		console.log(`[Service/registerUserService] ${error.message}`.red)
		throw new Error(error.message)
	}
}

export default registerUserService
