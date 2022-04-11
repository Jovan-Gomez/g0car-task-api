'use strict'

import 'colors'
import jwt from 'jsonwebtoken'

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

export const generateJWT = (id) => {
	try {
		return jwt.sign({id}, process.env.JWT_SECRET, {
			expiresIn: '30d'
		})
	} catch (error) {}
}
