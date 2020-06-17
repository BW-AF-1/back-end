const express = require('express');
const cors = require('cors');
// const blogRoutes = require('./blogRoutes');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.status(200).send('The App is working');
})

// server.use('/api/url', urlRoutes);

module.exports = server;