'use strict'

import 'colors'
import resetPasswordService from '../../services/users/resetPasswordService.js'
import { responseRequest } from '../../utils/index.js'

const resetPassword = async (req, res) => {
	const {token} = req.params
	const {password} = req.body
	if (!token) return res.status(400).json(responseRequest(400, null, 'token is required'))
	if (!password) return res.status(400).json(responseRequest(400, null, 'password is required'))
	try {
		const {statusCode, data, message} = await resetPasswordService({token, password})

		return res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/resetPassword] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.message.toString()))
	}
}

export default resetPassword