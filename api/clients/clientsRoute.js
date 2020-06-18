const express = require('express');

const routes = express.Router();

const db = require('../dbModel');

const helper = require('../helper');

const mw = require('../middleware');

const bcrypt = require('bcryptjs');

routes.get('/', async (req, res) => {
    const clients = await db.getFromDB('clients')
    try {
        if (clients) {
            res.status(200).send(clients)
        } else {
            helper.notFound('clients', res)
        }
    } catch (error) {
        helper.dbError(res)
    }
})

routes.post('/register', mw.missingProp, async(req, res) => {
    const hashedPassword = await bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword;
    try {
        await db.addData('clients', req.body)
        res.status(201).send(req.body)
    } catch  {
        helper.dbError(res)
    }
})
//TODO: LOGIN AND GET ASSISNED A TOKEN

//TODO: get individual CLIENTS classes AND AUTHETICATE

//TODO: POST A NEW CLASS TO THE CLIENT

//TODO: DELETE CLIENT ID

routes.delete('/:id', (req, res) => {
    res.status(200).send('hello')
})

//TODO: UPDATE CLIENT ID

routes.put('/:id', (req, res) => {
    res.status(200).send('hello')
})

module.exports = routes;