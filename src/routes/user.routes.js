'use strict'

import { Router } from 'express'
import { userController } from '../controllers/index.js'
import checkAuth from '../middlewares/checkAuth.js'


const router = Router()

router.route('/confirm/:token').get(userController.confirmUser)
router.route('/forget-password').post(userController.forgetPassword)
router.route('/reset-password/:token').get(userController.verifyToken).post(userController.resetPassword)
router.route('/').get(userController.getUsers)
router.route('/').post(userController.registerUser)
router.post('/auth',  userController.authUser)
router.route('/profile').get(checkAuth, userController.userProfile)

export default router
