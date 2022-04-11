'use strict'

import 'colors'
import User from '../../mongoose/models/User.js'
import { responseRequest } from '../../utils/index.js'

const resetPasswordService = async ({ token, password }) => {
    const user = await User.findOne({ token })
    if (!user) return responseRequest(404, null, 'invalid token')
    try { 
        user.password = password
        user.token = ''
        user.save()
		return responseRequest(200, true, '/users/reset-password successfuly')
	} catch (error) {
		console.log(`[Service/resetPasswordService] ${error.message}`.red)
		throw new Error(error.message)
	}
}

export default resetPasswordService