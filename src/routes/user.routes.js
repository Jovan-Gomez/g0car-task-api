'use strict'

import { Router } from 'express'
import { userController } from '../controllers/index.js'

const router = Router()

router.route('/').get(userController.getUsers)
router.route('/').post(userController.registerUser)
router.post('/auth',  userController.authUser)

export default router
