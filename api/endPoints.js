const db = require('./dbModel');

const helper = require('./helper');

const bcrypt = require('bcryptjs');


module.exports = {
    getEndPoint,
    register,
    login,
    findUser,
    deleteData,
    editData,
    getClassesByID,
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
    const password = await helper.hashPassword(req)
    req.body.password = password;
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
async function findUser(text, req, res) {
    const {id} = req.params
    const user = await db.findByID(text, id)
    console.log(user)
    try {
        if (user) {
            res.status(200).send(user)
        } else {
            helper.notFound(text, res)
        }
    } catch  {
        helper.dbError(res)
    }
}
async function deleteData(text, req, res) {
    const {id} = req.params
    const user = await db.deleteByID(text, id)
    try {
        if (user) {
            res.status(200).json({message: `User ID:${id} was deleted`})
        } else {
            helper.notFound(text, res)
        }
    } catch  {
        helper.dbError(res)
    }
}
async function editData(text, req, res) {
    const { id } = req.params;
    const password = await helper.hashPassword(req)
    const user = await db.edit(text, id, req.body.username, password)
    try {
        if (user) {
            res.status(200).json({ message: `Changed ID: ${id}`})
        } else {
            helper.notFound(text, res)
        }
    } catch  {
        helper.dbError(res)
    }
}
async function getClassesByID(text, req, res) {
    const { id } = req.params;
    const classes = await db.getIdClasses(text, id)
    try {
        if (classes) {
            res.status(200).send(classes)
        } else {
            helper.notFound(text, res)
        }
    } catch  {
        helper.dbError(res)
    }
}

