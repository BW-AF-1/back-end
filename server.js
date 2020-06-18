const express = require('express');
const cors = require('cors');
const classesRoutes = require('./api/classes/classesRoutes');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.status(200).send('The App is working');
})

server.use('/api/classes', classesRoutes);

module.exports = server;