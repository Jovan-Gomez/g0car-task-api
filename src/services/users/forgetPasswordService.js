'use strict'

import 'colors'
import User from '../../mongoose/models/User.js'
import { generateJWT, responseRequest } from '../../utils/index.js'

const forgetPasswordService = async ({ email }) => {
	const user = await User.findOne({ email })
	if (!user) return responseRequest(404, null, 'User not exists')
    try { 
		user.token = generateJWT(user._id)
		await user.save()
		return responseRequest(200, true, 'check your email to continue')
	} catch (error) {
		console.log(`[Service/forgetPasswordService] ${error.message}`.red)
		throw new Error(error.message)
	}
}

export default forgetPasswordService