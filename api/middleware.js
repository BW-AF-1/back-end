const jwt = require('jsonwebtoken');
const secrets = require('./config');

module.exports = {
    missingProp,
    restrictedRoute
}

function missingProp(req, res, next) {
    if (req.body.username === "" || req.body.password === "") {
        return res.status(404).json({ message: 'You can\'t submit empty name or password fields' })
    } else if (!req.body.hasOwnProperty('username') || !req.body.hasOwnProperty('username')  ) {
        return res.status(400).json({message: 'You are missing a username or a password property'})
    }
 else {
        next()
    }
}

function restrictedRoute(req, res, next) {
    const token = req.headers.autoriztion;
    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: "You are not authorized to enter" })
            } else {
                res.decodedToken = decodedToken;
                console.log(decodedToken)
                next();
            }
        })
    }
}