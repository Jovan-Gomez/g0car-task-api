'use strict'

import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
			trim: true,
		},
		nickname: {
			type: String,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: 'password is requiredw',
			trim: true,
		},
		token: {
			type: String,
		},
		isConfirmed: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
)

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}
	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function (userPassword) {
	return await bcrypt.compare(userPassword, this.password)
}

const User = mongoose.model('User', userSchema)

export default User
