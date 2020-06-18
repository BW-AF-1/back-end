const express = require('express');
const cors = require('cors');
const classesRoutes = require('./api/classes/classesRoutes');
const clientsRoutes = require('./api/clients/clientsRoute');
const instructorsRoutes = require('./api/instructors/instructorsRoute');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.status(200).send('The App is working');
})

server.use('/api/classes', classesRoutes);
server.use('/api/clients', clientsRoutes);
server.use('/api/instructors', instructorsRoutes);

module.exports = server;