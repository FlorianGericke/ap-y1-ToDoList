const express = require('express');

const todoRouts = require('./../controllers/todos-controler');

const router = express.Router();

router.get('/all',todoRouts.allTodos);

router.post('./add',todoRouts.addTodo);

router.put('/done',todoRouts.doneTodo);

router.delete('/delete',todoRouts.deleteTodo);

module.exports = router;
