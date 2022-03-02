const express = require('express');

const todoRouts = require('./../controllers/todos');
const router = express.Router();

router.get('/all', todoRouts.allTodos);
router.post('/add', todoRouts.addTodo);
router.put('/done/:id', todoRouts.doneTodo);
router.put('/unDone/:id', todoRouts.UnDoneTodo);
router.delete('/delete/:id', todoRouts.deleteTodo);

module.exports = router;
