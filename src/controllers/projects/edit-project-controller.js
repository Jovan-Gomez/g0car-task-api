'use strict'

import 'colors'
import mongoose from 'mongoose'
import editProjectService from '../../services/projects/editProjectService.js'
import { responseRequest } from '../../utils/index.js'

const editProject = async (req, res) => {
	const creatorId = req.user.id
    const {projectId} = req.params

	if (!creatorId) {
		return res.status(404).json(responseRequest(404, null, 'creatorId is required'))
	}
	
	if(!mongoose.Types.ObjectId.isValid(projectId)){
		return res.status(404).json(responseRequest(404, null, 'invalid projectId'))
	}

	try {
		const {statusCode, data, message} = await editProjectService({projectId, creatorId}, req.body)
		return res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/editProject] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.message.toString()))
	}
}

export default editProject
