const express = require('express');

const todoRouter = require('./routes/todoRouter');
const bodyParser = require("express");

const PORT = process.env.PORT || 4001

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/todo', todoRouter);

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something is broken.')
});

app.use(function (req, res, next) {
    res.status(404).send('Sorry we could not find that.')
});

app.listen(PORT, function() {
    console.log(`Server is running on: ${PORT}`)
});
