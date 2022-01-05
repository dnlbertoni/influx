require('dotenv').config()
const jwt = require('jsonwebtoken');
const key = process.env.JWT_KEY
const timeToken = process.env.JWT_TIME_TOKEN


function createToken() {
    const payload = {
        chek: true
    }
    const token = jwt.sign(payload, key, {
        expiresIn: timeToken
    });

    return token
}



module.exports = createToken;
