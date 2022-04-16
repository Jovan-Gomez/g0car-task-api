'use strict'

import 'colors'
import Project from '../../mongoose/models/Project.js'
import { responseRequest } from '../../utils/index.js'

const allProjectsService = async ({creatorId}) => {
	try {
		const projects = await Project.find({creatorId}, { __v: 0 })
		return responseRequest(200, projects, 'GET /projects successfully')
	} catch (error) {
		console.log(`[Service/allProjectsService] ${error}`.red)
		throw new Error(error.message)
	}
}

export default allProjectsService