'use strict'

import 'colors'
import userRegister from '../../services/users/userRegister.service.js'
import { responseRequest } from '../../utils/index.js'

const registerUser = async (req, res) => {
	try {
		const { fullName, nickname, email, password } = req.body
		const {statusCode, data, message} = await userRegister({ fullName, nickname, email, password })
		if (statusCode !== 201) {
			return res.status(statusCode).json(responseRequest(statusCode, data, message))
		}
		res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/registerUser] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.message.toString()))
	}
}

export default registerUser
