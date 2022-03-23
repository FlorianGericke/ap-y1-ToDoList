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
const PasswordHasher = require("./util/PasswordHasher");

//setting up middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    const allowedOrigins = ['http://127.0.0.1:3000','http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
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
    .then(res =>{
        User.findByPk(1)
            .then(user => {
                if(!user){
                    User.create({
                        name: 'TestUser',
                        password: PasswordHasher.createPasswordJSON('TestPassword')
                    })
                        .then(user => {console.log('TestUser created')});
                }
            })
    })
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
