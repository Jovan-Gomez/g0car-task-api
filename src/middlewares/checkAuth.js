import jwt from "jsonwebtoken"
import User from '../mongoose/models/User.js'
import { responseRequest } from "../utils/index.js"

const checkAuth = async(req, res, next) =>{
    const {authorization} = req.headers
    if (!authorization)  return res.status(404).json(responseRequest(404, null, 'token is required'))
    if (!authorization.startsWith('Bearer')) return res.status(400).json(responseRequest(400, null, 'invalid token'))
    try {
       const token = authorization.split(' ')[1]
       const decode = jwt.verify(token, process.env.JWT_SECRET)
       req.user = await User.findById(decode.id, {_id: 1, fullName: 1, nickname:1, email: 1})
       return next()
    } catch (error) {
        console.log(`[Middleware/checkAuth] ${error}`.red)
		return res.status(400).json(responseRequest(400, null, error.message.toString()))
    }
}


export default checkAuth