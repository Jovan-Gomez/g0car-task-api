'use strict'

import 'colors'
import allUsersService from '../../services/users/allUsersService.js'
import { responseRequest } from '../../utils/index.js'

const getUsers = async (req, res) => {
	try {
		const {statusCode, data, message} = await allUsersService()
		return res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/getUsers] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.toString()))
	}
}

export default getUsers
