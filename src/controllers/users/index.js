'use strict'

import authUser from './auth-user-controller.js'
import confirmUser from './confirm-user-controller.js'
import forgetPassword from './forget-password-controller.js'
import getUsers from './get-users-controller.js'
import registerUser from './register-user-controller.js'
import resetPassword from './reset-password-controller.js'
import userProfile from './user-profile-controller.js'
import verifyToken from './verify-token-controller.js'

const userController = {
	authUser,
	confirmUser,
	forgetPassword,
	getUsers,
	registerUser,
	resetPassword,
	userProfile,
	verifyToken,
}

export default userController
