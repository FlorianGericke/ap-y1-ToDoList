const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

const sequelize = require('./util/Database');
const Todo = require('./models/Todo');
const User = require('./models/User');

const todoRouter = require('./routes/todo');
const authentificationRouter = require('./routes/authenticate');

//setting up middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');

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
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

app.use('/todo', todoRouter);
app.use('/auth', authentificationRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

User.hasMany(Todo);
Todo.belongsTo(User);

sequelize.sync({force: true})
    .catch(err => console.log(err));

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
