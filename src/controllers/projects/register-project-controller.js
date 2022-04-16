'use strict'

import 'colors'
import registerProjectService from '../../services/projects/registerProjectService.js'
import { responseRequest } from '../../utils/index.js'

const registerProject = async (req, res) => {
	const { name, description, deliveryDate, partners } = req.body
	const creatorId = req.user.id

	if (!name || !description || !creatorId) {
		return res.status(400).json(responseRequest(400, null, 'fields are required'))
	}
	try {
		const {statusCode, data, message} = await registerProjectService({ name, description, deliveryDate, creatorId, partners })

		return res.status(statusCode).json(responseRequest(statusCode, data, message))
	} catch (error) {
		console.log(`[Controller/registerProject] ${error}`.red)
		return res.status(500).json(responseRequest(500, null, error.message.toString()))
	}
}

export default registerProject
