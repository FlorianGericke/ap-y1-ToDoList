const express = require('express');

const todoRouter = require('./routes/todoRouter');
const bodyParser = require('express');

const PORT = process.env.PORT || 4001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/todo', todoRouter);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something is broken.');
});

app.use(function (req, res, next) {
    res.status(404).send('Sorry we could not find that.');
});

app.listen(PORT, function() {
    console.log(`Server is running on: ${PORT}`);
});
