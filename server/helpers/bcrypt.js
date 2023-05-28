const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

const getHash = (password) =>{
    return bcrypt.hashSync(password, salt)
}

const verifyHash = (password ,hashedPass) =>{
    return bcrypt.compareSync(password, hashedPass)
}

module.exports = {getHash, verifyHash}