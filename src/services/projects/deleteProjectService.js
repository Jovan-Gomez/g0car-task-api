'use strict'

import 'colors'
import Project from '../../mongoose/models/Project.js'
import { responseRequest } from '../../utils/index.js'

const deleteProjectService = async ({projectId, creatorId}) => {
	try {
		const project = await Project.findOne({_id: projectId})
        if (!project) {
            return responseRequest(404, null, 'project not exists')   
        }
		if (project.creatorId.toString() !== creatorId.toString()) {
			return responseRequest(401, null, 'access denied')  
		}

        await project.deleteOne()
		return responseRequest(200, null, `DELETE /projects/${projectId} successfully`)
	} catch (error) {
		console.log(`[Service/deleteProjectService] ${error}`.red)
		throw new Error(error.message)
	}
}

export default deleteProjectService