const basicAuth = require("express-basic-auth")
const User = require("../models/user")
 
checkInMongoose = async (username, password, cb) => {
    const authResult = await User.authenticate()(username, password)
    return cb(null, authResult.user)
}

module.exports = {
    basic: basicAuth({
        authorizer: checkInMongoose,
        authorizeAsync: true,
    })
}