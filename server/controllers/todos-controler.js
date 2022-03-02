const Todo = require("../models/Todo");

exports.allTodos = (req, res) => {
    Todo.findAll()
        .then(todos => res.json(todos))
        .catch(result => res.json({
            ErrorMassage: 'Error while receiving all todos from Database',
            result: result
        }));
};

exports.addTodo = (req, res) => {
    Todo.create({
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
