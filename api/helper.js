const jwt = require('jsonwebtoken');
const secrets = require('./config');

module.exports = {
    dbError,
    notFound,
    generateToken
}

function dbError(res) {
    return res.status(500).json({ message: "Server error" })
}

function notFound(text, res) {
    return res.status(404).json({ message: `There are no ${text}`})
}

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const config = {
        expiresIn: "1hr"
    }
    return jwt.sign(payload, secrets.jwtSecret, config)
}