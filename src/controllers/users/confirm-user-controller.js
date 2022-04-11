'use strict'

import 'colors'
import confirmUserService from '../../services/users/confirmUserService.js'
import { responseRequest } from '../../utils/index.js'

const confirmUser = async (req, res) => {
    const {token} = req.params
	try {
		const {statusCode, data, message} = await confirmUserService({token})
		return res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/confirmUser] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.toString()))
	}
}

export default confirmUser
