const express = require('express');

const routes = express.Router();
const mw = require('../middleware');
const endPoint = require('../endPoints');

routes.get('/', (req, res) => {
    endPoint.getEndPoint('clients', res)
})
routes.post('/register', mw.missingProp, (req, res) => {
    endPoint.register('clients', res, req)
})
routes.post('/login', mw.missingProp, (req, res) => {
    endPoint.login('clients', req, res)
})

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