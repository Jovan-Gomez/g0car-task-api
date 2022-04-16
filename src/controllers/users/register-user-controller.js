'use strict'

import 'colors'
import registerUserService from '../../services/users/registerUserService.js'
import { responseRequest } from '../../utils/index.js'

const registerUser = async (req, res) => {
	const { fullName, nickname, email, password } = req.body
	if (!fullName || !email || !password) {
		return res.status(400).json(responseRequest(400, null, 'fields are required'))
	}
	try {
		const {statusCode, data, message} = await registerUserService({ fullName, nickname, email, password })

		return res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/registerUser] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.message.toString()))
	}
}

export default registerUser
