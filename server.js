'use strict ';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})
app.get('/data', (req, res) => {
    let names = require('./package.json')
    res.status(200).json(names);
})
app.get('*', (req, res) => {
    res.status(404).send('NotFound')
})
app.listen(PORT, () => console.log(`Listens on ${PORT}`));