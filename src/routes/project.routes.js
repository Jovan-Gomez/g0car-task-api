'use strict'

import { Router } from 'express'
import checkAuth from '../middlewares/checkAuth.js'
import {projectController} from '../controllers/index.js'

const { 
    getProjects, 
    // addPartner,
    // deletePartner,
    deleteProject, 
    editProject, 
    getProjectById, 
    registerProject,
} = projectController
const router = Router()

router.route('/').get(checkAuth, getProjects).post(checkAuth, registerProject)
router.route('/:projectId')
    .get(checkAuth, getProjectById)
    .put(checkAuth, editProject)
    .delete(checkAuth, deleteProject)
// router.post('/partners', addPartner)
// router.post('/partners/:partnerId', deletePartner)


export default router