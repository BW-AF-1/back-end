const db = require('./dbModel');

const helper = require('./helper');

const bcrypt = require('bcryptjs');


module.exports = {
    getEndPoint,
    register,
    login
}

async function getEndPoint(text, res) {
    const data = await db.getFromDB(text)
    try {
        if (data) {
            res.status(200).send(data)
        } else {
            helper.notFound(text, res)
        }
    } catch (error) {
        helper.dbError(res)
    }
}

async function register(text, res, req) {
    const hashedPassword = await bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword;
    try {
        await db.addData(text, req.body)
        res.status(201).send(req.body)
    } catch  {
        helper.dbError(res)
    }
}

async function login(text, req, res) {
    const { password, username } = req.body;
    const user = await db.find(text, username)
    try {
        if (user && bcrypt.compareSync(password, user.password)) {

            const token = helper.generateToken(user)

            res.status(200).json({ message: ` Welcome ${user.username} `, token })
        } else {
            res.status(404).json({ message: `${username}, could not be found` })
        }
    } catch  {
        helper.dbError(res)
    }

}