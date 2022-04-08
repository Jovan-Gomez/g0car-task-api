'use strict'

import 'colors'
import auth from '../../services/users/auth.service.js'
import { responseRequest } from '../../utils/index.js'

const authUser = async (req, res) => {
	try {
		const { email, password } = req.body
		const {statusCode, data, message} = await auth({ email, password })
		if (statusCode !== 200) {
			res.status(statusCode).json(responseRequest(statusCode, data, message))
		}
		res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/authUser] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.message.toString()))
	}
}

export default authUser
