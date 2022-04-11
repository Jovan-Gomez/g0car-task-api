'use strict'

import 'colors'
import User from '../../mongoose/models/User.js'
import { responseRequest } from '../../utils/index.js'

const confirmUserService = async ({ token }) => {
	const user = await User.findOne({token})
	if (!user) return responseRequest(403, null, 'Invalid token')
	try {
        user.isConfirmed = true
		user.token = ''
		await user.save()
		return responseRequest(200, true, 'GET /users/confirm successfuly')
	} catch (error) {
		console.log(`[Service/confirmUserService] ${error.message}`.red)
		throw new Error(error.message)
	}
}

export default confirmUserService
