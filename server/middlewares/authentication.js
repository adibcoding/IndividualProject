const { verifyToken } = require("../helpers/jsonwebtoken")
const {User} = require("../models")

async function Authentication(req, res, next){
    try {
        const {access_token} = req.headers
        if (!access_token) throw {name: "InvalidToken"}

        const payload = verifyToken(access_token)

        const user = await User.findOne({
            where: {
                email: payload.email
            }
        })

        if(!user) throw {name: "Unauthorized"}

        req.extra = {
            userId : user.id,
            email: user.email
        }

        next()
    } catch (err) {
        next(err)
        
    }
}

module.exports = Authentication