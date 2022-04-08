'use strict'

import 'colors'
import User from '../../mongoose/models/User.js'

const allUsers = async () => {
	try {
		const users = await User.find({}, { _id: 0, password: 0, __v: 0 })
		return users
	} catch (error) {
		console.log(`[Service/allUsers] ${error}`.red)
		throw new Error(error.message)
	}
}

export default allUsers
