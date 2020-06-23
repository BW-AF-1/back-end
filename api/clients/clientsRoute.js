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

//TODO: AUTHETICATE

routes.get('/:id', (req, res) => {
    endPoint.findUser('clients', req, res)
})
//get individual clients classes

//TODO: AUTHETICATE
routes.get('/:id/classes', (req, res) => {
    endPoint.getClassesByID('clients', req, res)
})
//TODO: POST A NEW CLASS TO THE CLIENT
//CLIENT PICKS UP CLASSES THAT IS IN CLASSES DATABASE
routes.get('/:id/classes/:classId', (req, res) => {
    endPoint.getClassesByID('clients', req, res)
})

//TODO: AUTHENTICATE

routes.delete('/:id', (req, res) => {
    endPoint.deleteData('clients', req, res)
})
//TODO: AUTHENTICATE

routes.put('/:id', mw.missingProp, (req, res) => {
    endPoint.editData('clients', req, res)
})

module.exports = routes;