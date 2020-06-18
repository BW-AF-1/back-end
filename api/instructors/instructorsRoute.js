const express = require('express');

const routes = express.Router();

const db = require('../dbModel');

const helper = require('../helper');

const mw = require('../middleware');

const bcrypt = require('bcryptjs');

routes.get('/', async (req, res) => {
    const instructors = await db.getFromDB('instructors')
    try {
        if (instructors) {
            res.status(200).send(instructors)
        } else {
            helper.notFound('instructors', res)
        }
    } catch (error) {
        helper.dbError(res)
    }
})

routes.post('/register', mw.missingProp, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hashSync(req.body.password, 10)
        req.body.password = hashedPassword;
        await db.addData('instructors', req.body)
        res.status(201).send(req.body)
    } catch  {
        helper.dbError(res)
    }
})

//TODO:LOGIN AND GET ASSISNED A TOKEN

//TODO: get individual instructors classes AND AUTHETICATE

//TODO: DELETE INSTRUCTOR ID

routes.delete('/:id', (req, res) => {
    res.status(200).send('hello')
})

routes.put('/:id', (req, res) => {
    res.status(200).send('hello')
})

module.exports = routes;