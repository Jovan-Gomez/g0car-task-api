'use strict'

import 'colors'
import allProjectsService from '../../services/projects/allProjectsService.js'
import { responseRequest } from '../../utils/index.js'

const getProjects = async (req, res) => {
	const creatorId = req.user.id
	if (!creatorId) {
		return res.status(404).json(responseRequest(400, null, 'creatorId is required'))
	}
	try {
		const {statusCode, data, message} = await allProjectsService({creatorId})
		return res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/getProjects] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.toString()))
	}
}

export default getProjects
