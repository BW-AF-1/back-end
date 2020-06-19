const express = require('express');

const routes = express.Router();
const mw = require('../middleware');
const endPoint = require('../endPoints');

routes.get('/', (req, res) => {
    endPoint.getEndPoint('instructors', res)
})
routes.post('/register', mw.missingProp, async (req, res) => {
    endPoint.register('instructors', res, req)
})
routes.post('/login', mw.missingProp, async (req, res) => {
    endPoint.login('instructors', req, res)

});

//TODO: get individual instructors classes AND AUTHETICATE

//TODO: DELETE INSTRUCTOR ID

routes.delete('/:id', (req, res) => {
    res.status(200).send('hello')
})

routes.put('/:id', (req, res) => {
    res.status(200).send('hello')
})

module.exports = routes;