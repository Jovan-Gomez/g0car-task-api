'use strict'

import 'colors'
import User from '../../mongoose/models/User.js'
import { responseRequest } from '../../utils/index.js'

const verifyTokenService = async ({ token }) => {
	const isValidToken = await User.findOne({ token })
	if (!isValidToken) return responseRequest(404, null, 'invalid token')
    try { 
		return responseRequest(200, true, 'token is valid')
	} catch (error) {
		console.log(`[Service/verifyTokenService] ${error.message}`.red)
		throw new Error(error.message)
	}
}

export default verifyTokenService