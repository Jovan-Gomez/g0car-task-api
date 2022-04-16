'use strict'

import 'colors'
import Project from '../../mongoose/models/Project.js'
import { responseRequest } from '../../utils/index.js'

const registerProjectService = async ({ name, description, deliveryDate, creatorId, partners }) => {
	const projectExists = await Project.findOne({ name })
	if (projectExists) return responseRequest(400, null, 'project already registered')
	try {
		const project = new Project({ name, description, deliveryDate, creatorId, partners })
		await project.save()
		return responseRequest(201, project, 'POST /projects successfully')
	} catch (error) {
		console.log(`[Service/registerProjectService] ${error.message}`.red)
		throw new Error(error.message)
	}
}

export default registerProjectService
