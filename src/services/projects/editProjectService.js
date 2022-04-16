'use strict'

import 'colors'
import Project from '../../mongoose/models/Project.js'
import { responseRequest } from '../../utils/index.js'

const editProjectService = async ({projectId, creatorId},{ name, description, deliveryDate, partners }) => {
	    const project = await Project.findOne({_id: projectId})
        if (!project) {
            return responseRequest(404, null, 'project not exists')   
        }
		if (project.creatorId.toString() !== creatorId.toString()) {
			return responseRequest(401, null, 'access denied')  
		}
	try {
		project.name = name || project.name
		project.description = description || project.description
		project.deliveryDate = deliveryDate || project.deliveryDate
		project.partners = partners || project.partners
		
		await project.save()
		return responseRequest(201, project, `PUT /projects/${projectId} successfully`)
	} catch (error) {
		console.log(`[Service/editProjectService] ${error.message}`.red)
		throw new Error(error.message)
	}
}

export default editProjectService