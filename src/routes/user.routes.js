'use strict'

import { Router } from 'express'
import { userController } from '../controllers/index.js'
import checkAuth from '../middlewares/checkAuth.js'

const router = Router()
const { 
    authUser,
    confirmUser, 
    forgetPassword, 
    getUsers,
    registerUser,
    resetPassword,
    userProfile,
    verifyToken, 
} = userController

router.post('/auth', authUser)
router.get('/confirm/:token', confirmUser)
router.get('/profile', checkAuth, userProfile)
router.route('/').get(getUsers).post(registerUser)
router.route('/forget-password').post(forgetPassword)
router.route('/reset-password/:token').get(verifyToken).post(resetPassword)

export default router
