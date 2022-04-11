'use strict'

import 'colors'
import authUserService from '../../services/users/authUserService.js'
import { responseRequest } from '../../utils/index.js'

const authUser = async (req, res) => {
	const { email, password } = req.body
	if (!email || !password) return res.status(400).json(responseRequest(400, null, 'email and password are required'))
	try {
		const {statusCode, data, message} = await authUserService({ email, password })
		return res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/authUser] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.message.toString()))
	}
}

export default authUser
