'use strict'

import authUser from './auth-user-controller.js'
import getUsers from './get-users-controller.js'
import registerUser from './register-user-controller.js'

const userController = {
	getUsers,
	registerUser,
	authUser,
}

export default userController
