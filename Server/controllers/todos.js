const Todo = require("../models/Todo");
const User = require("../models/User");

exports.allTodos = (req, res) => {
    if (req.session.loggedIn === true) {
        User.findByPk(req.session.user.id)
            .then(user => {
                if (user) {
                    user.getTodos({
                        order: [
                            ['priority', 'DESC'],
                        ]
                    })
                        .then(todos => {
                            if (todos) {
                                res.json(todos)
                            } else {
                                res.json({
                                    ErrorMassage: 'Error in receiving Todos',
                                })
                            }
                        })
                } else {
                    res.json({
                        ErrorMassage: 'Owner not found in database'
                    });
                }

            })
            .catch(err => res.json({
                ErrorMassage: 'Error in Add todo',
                result: err
            }));
    } else {
        res.json({msg: `No one is logged in`});
    }
};

exports.addTodo = (req, res) => {
    if (req.session.loggedIn === true) {
        User.findByPk(req.session.user.id)
            .then(user => {
                if (user) {
                    user.createTodo({
                        task: req.body.task,
                        priority: req.body.priority,
                        done: (req.body.done ? req.body.done : 0)
                    })
                        .then(result => res.json({
                            massage: `New Todo ${req.body.task} is added to database`
                        }))
                        .catch(err => res.json({
                            ErrorMassage: 'Error in Create new todo',
                            result: err
                        }));
                } else {
                    res.json({
                        ErrorMassage: 'Owner not found in database'
                    });
                }
            })
            .catch(err => res.json({
                ErrorMassage: 'Error in Add todo',
                result: err
            }));
    } else {
        res.json({msg: `No one is logged in`});
    }
};

exports.doneTodo = (req, res) => {
    Todo.update({done: true}, {
        where: {
            id: req.params.id
        }
    })
        .then(todo => {
            res.json({ErrorMassage: 'Todo is set to done'})
        })
        .catch(err => res.json({
            ErrorMassage: 'Error in set todo done',
            result: err
        }));
};

exports.UnDoneTodo = (req, res) => {
    Todo.update({done: false}, {
        where: {
            id: req.params.id
        }
    })
        .then(todo => {
            res.json({ErrorMassage: 'Todo is set to Undone'})
        })
        .catch(err => res.json({
            ErrorMassage: 'Error in set todo Undone',
            result: err
        }));
};

exports.deleteTodo = (req, res) => {
    Todo.findByPk(req.params.id)
        .then(todo => {
            todo.destroy();
            res.json({ErrorMassage: 'Todo is deleted'})
        })
        .catch(result => res.json({
            ErrorMassage: 'Error delete todo',
            result: result
        }));
};
