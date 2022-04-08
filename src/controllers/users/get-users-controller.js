'use strict'

import 'colors'
import allUsers from '../../services/users/allUsers.service.js'
import { responseRequest } from '../../utils/index.js'

const getUsers = async (req, res) => {
	try {
		const users = await allUsers()
		res.status(200).json(responseRequest(200, users, 'GET /users successfuly'))
	} catch (error) {
		console.log(`[getUsers] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.toString()))
	}
}

export default getUsers
