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
routes.get('/:id', (req, res) => {
    endPoint.findUser('instructors', req, res)
})

//get individual instructors classes AND AUTHETICATE
routes.get('/:id/classes', (req, res) => {
    endPoint.getClassesByID('instructors', req, res)
})

//TODO: INSTRUCTOR CAN POST CLASSES THAT THEY TEACH
//TAKE OUT mw.missingProp and write classes middleware

routes.post('/:id/classes', mw.missingProp, async (req, res) => {
    endPoint.login('instructors', req, res)

});

//TODO: AUTHENTICATE

routes.delete('/:id', (req, res) => { //ERROR WHEN ASSOCIATED WITH CLASS
    endPoint.deleteData('instructors', req, res)
})

//TODO: AUTHENTICATE
routes.put('/:id', mw.missingProp, (req, res) => {
    endPoint.editData('instructors', req, res)
})

module.exports = routes;