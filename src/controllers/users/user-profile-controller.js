'use strict'

import 'colors'
import { responseRequest } from '../../utils/index.js'

const userProfile = async (req, res) => {
	try {
		const {user} = req
		return res.status(200).json(responseRequest(200, user, 'GET /users/profile'))
	} catch (error) {
		console.log(`[Controller/userProfile] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.toString()))
	}
}

export default userProfile
