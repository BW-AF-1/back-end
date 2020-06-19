
module.exports = {
    missingProp
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