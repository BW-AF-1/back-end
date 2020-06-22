const express = require('express');

const routes = express.Router();

const db = require('../dbModel');

const helper = require('../helper');

const endPoint = require('../endPoints');

const mw = require('../middleware');

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

routes.get('/:id', (req, res) => {
    endPoint.findUser('classes', req, res)
})

//TODO: AUTHENTICATE
routes.delete('/:id', (req, res) => {
    endPoint.deleteData('classes', req, res)
})

//TODO: AUTHENTICATE
routes.put('/:id', mw.missingClassProps, (req, res) => {
    endPoint.editData('classes', req, res)
})

module.exports = routes;