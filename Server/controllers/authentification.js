const User = require("../models/User");
const PasswordHasher = require("../util/PasswordHasher");

exports.postRegistration = (req, res) => {
    if (req.session.loggedIn !== true) {
        User.findAll({
            where: {
                name: req.body.username
            }
        })
            .then(users => {
                if (users.length === 0) {
                    User.create({
                        name: req.body.username,
                        password: PasswordHasher.createPasswordJSON(req.body.password)
                    }).then(user => {
                        req.session.loggedIn = true;
                        req.session.user = user;
                        res.json({msg: `Account for ${user.name} create successfully`});
                    })
                } else {
                    res.json({msg: `Account with Username ${users[0].name} is already created`});
                }
            });
    } else {
        res.json({msg: `Someone is currently logged in`});
    }
}

exports.postLogin = (req, res) => {
    if (req.session.loggedIn !== true) {
        User.findAll({
            where: {
                name: req.body.username,
            }
        })
            .then(users => {
                const user = users.filter(user => PasswordHasher.checkPassword(req.body.password, user.password))[0];

                if (!user) {
                    res.json({msg: `No suitable Accout for this credentials found`});
                } else {
                    req.session.loggedIn = true;
                    req.session.user = user;
                    res.json({msg: `User ${user.name} logged in successfully`, session: req.sessionID});
                }
            });
    } else {
        res.json({msg: `Someone is currently logged in1`});
    }
}

exports.postLogout = (req, res) => {
    if (req.session.loggedIn === true) {
        let user = req.session.user;
        req.session.user = null;
        req.session.loggedIn = false;
        res.json({msg: `${user.name} has logged out`});
    } else {
        res.json({msg: `No one is logged in`});
    }
}