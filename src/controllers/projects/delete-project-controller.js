'use strict'

import 'colors'
import mongoose from 'mongoose'
import deleteProjectService from '../../services/projects/deleteProjectService.js'
import { responseRequest } from '../../utils/index.js'

const deleteProject = async (req, res) => {
    const {projectId} = req.params
	const creatorId = req.user.id

	if (!creatorId) {
		return res.status(404).json(responseRequest(404, null, 'creatorId is required'))
	}
	
	if(!mongoose.Types.ObjectId.isValid(projectId)){
		return res.status(404).json(responseRequest(404, null, 'invalid projectId'))
	}

	try {
		const {statusCode, data, message} = await deleteProjectService({projectId, creatorId})
		return res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/deleteProject] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.toString()))
	}
}

export default deleteProject
