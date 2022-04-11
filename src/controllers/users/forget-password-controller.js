'use strict'

import 'colors'
import forgetPasswordService from '../../services/users/forgetPasswordService.js'
import { responseRequest } from '../../utils/index.js'

const forgetPassword = async (req, res) => {
    const {email} = req.body
	if (!email) return res.status(400).json(responseRequest(400, null, 'Email is required'))

	try {
	const {statusCode, data, message} = await forgetPasswordService({email})
	return res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/forgetPassword] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.message.toString()))
	}
}

export default forgetPassword
