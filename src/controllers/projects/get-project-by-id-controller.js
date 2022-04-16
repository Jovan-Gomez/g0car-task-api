'use strict'

import 'colors'
import mongoose from 'mongoose'
import projectByIdService from '../../services/projects/projectByIdService.js'
import { responseRequest } from '../../utils/index.js'

const getProjectById = async (req, res) => {
    const {projectId} = req.params
	const creatorId = req.user.id

	if (!creatorId) {
		return res.status(404).json(responseRequest(404, null, 'creatorId is required'))
	}
	
	if(!mongoose.Types.ObjectId.isValid(projectId)){
		return res.status(404).json(responseRequest(404, null, 'invalid projectId'))
	}

	try {
		const {statusCode, data, message} = await projectByIdService({projectId, creatorId})
		return res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/getProjectById] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.toString()))
	}
}

export default getProjectById
