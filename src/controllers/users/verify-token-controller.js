'use strict'

import 'colors'
import verifyTokenService from '../../services/users/verifyTokenService.js'
import { responseRequest } from '../../utils/index.js'

const verifyToken = async (req, res) => {
	const {token} = req.params
	if (!token) return res.status(400).json(responseRequest(400, null, 'token is required'))
	try {
		const {statusCode, data, message} = await verifyTokenService({token})

		return res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/resetPassword] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.message.toString()))
	}
}

export default verifyToken