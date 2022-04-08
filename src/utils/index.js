'use strict'

import 'colors'

export const responseRequest = (statusCode, data, message) => {
	try {
		return { statusCode, data, message }
	} catch (error) {
		console.log(`[responseRequest] ${error}`.red)
		process.exit(1)
	}
}

export const generateId = () => {
	const random = Math.random().toString(32).substring(2)
	const date = Date.now().toString(32)
	return `${random}${date}`
}

export const generateJWT = () => {
	try {
	} catch (error) {}
}
