'use strict'

import 'colors'
import User from '../../mongoose/models/User.js'
import { responseRequest } from '../../utils/index.js'

const auth = async ({ email, password }) => {
	try {
		const user = await User.findOne({ email }, { _id: 0, __v: 0 })

		//verify email
		if (!user) return responseRequest(400, null, 'User not exists')

		//verify password
		const isSame = await user.comparePassword(password)
		if (!isSame) return (responseRequest(400, null, 'The password is incorrect'))

		return responseRequest(200, user, 'POST /users/auth successfuly')
	} catch (error) {
		console.log(`[Service/auth] ${error}`.red)
		throw new Error(error.message)
	}
}

export default auth
