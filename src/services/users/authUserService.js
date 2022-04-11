'use strict'

import 'colors'
import User from '../../mongoose/models/User.js'
import { generateJWT, responseRequest } from '../../utils/index.js'

const authUserService = async ({ email, password }) => {
	const user = await User.findOne({ email }, {__v: 0 })
	if (!user) return responseRequest(400, null, 'User not exists')
	try {
		//verify password
		const isSame = await user.comparePassword(password)
		if (!isSame) return (responseRequest(400, null, 'The password is incorrect'))

		user.token = generateJWT(user._id)
		return responseRequest(200, user, 'POST /users/auth successfuly')
	} catch (error) {
		console.log(`[Service/authUserService] ${error}`.red)
		throw new Error(error.message)
	}
}

export default authUserService
