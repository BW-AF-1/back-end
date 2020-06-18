const express = require('express');

const routes = express.Router();

const db = require('../dbModel');

const helper = require('../helper');

routes.get('/', async(req, res) => {
    const classes = await db.getFromDB('classes')
    try {
        if (classes) {
            res.status(200).send(classes)
        } else {
            helper.notFound('classes', res)
        }
    } catch (error) {
        helper.dbError(res)
    }
})

routes.post('/', (req, res) => {
    res.status(201).send('hello')
})

routes.delete('/:id', (req, res) => {
    res.status(200).send('hello')
})

routes.put('/:id', (req, res) => {
    res.status(200).send('hello')
})

module.exports = routes;