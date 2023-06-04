const { verifyHash, getHash } = require("../helpers/bcrypt")
const { generateToken, verifyToken } = require("../helpers/jsonwebtoken")
const {User} = require("../models")

class UserController{
    static async login(req, res, next){
        try {
            const {email, password} = req.body
            if( !email || !password) throw {name: "InvalidInput"}
            const user = await User.findOne({
                where: {
                    email
                }
            })
            
            if(!user) throw {name: "Unauthorized"}

            const passChecked = verifyHash(password, user.password)
            if(!passChecked) throw {name: "Unauthorized"}

            const token = generateToken({
                id: user.id,
                email: user.email
            })

            res.status(200).json({
                access_token: token,
                id: user.id
            })

        } catch (err) {
            next(err)
        }
    }

    static async register(req, res, next){
        try {
            const {email, password} = req.body
            if(!email || !password) throw {name: "InvalidInput"}
            const hashedPass = getHash(password)

            const user = await User.create({email, password: hashedPass})

            res.status(201).json({
                id: user.id,
                email: user.email
            })
            
            
        } catch (err) {
            next(err)
        }
    }

    static async gsign(req, res, next){
        try {
            
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController

