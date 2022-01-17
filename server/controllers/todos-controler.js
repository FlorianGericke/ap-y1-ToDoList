const db = require('../db');

// todo async in tutorial i like to try without !!!
exports.allTodos = (req, res) => {
  db.all('SELECT * FROM todo', [], (err, rows) => {
    if (err) {
      res.json({ ErrorMassage: 'Error while receiving all todos from Database' });
    } else {
      res.json(rows);
    }
  });
};

// todo async in tutorial i like to try without !!!
exports.addTodo = (req, res) => {
  db.run('INSERT INTO todo (task,priority,done) VALUES (?,?,?)', [req.body.task, req.body.priority, (req.body.done ? req.body.done : 0 )], (err) => {
    if (err) {
      res.json({ ErrorMassage: 'Error in Create new todo' });
    } else {
      res.json({ massage: `New Todo ${req.body.task} is added to database` });
    }
  });
};

// todo async in tutorial i like to try without !!!
exports.doneTodo = (req, res) => {
  db.run('UPDATE todo SET done = true WHERE id = ?', req.params.id, (err) => {
    if (err) {
      res.json({ ErrorMassage: 'Error while set todo done' });
    } else {
      res.json({ massage: 'Todo is set to done' });
    }
  });
};

// todo async in tutorial i like to try without !!!
exports.UnDoneTodo = (req, res) => {
  db.run('UPDATE todo SET done = false WHERE id = ?', req.params.id, (err) => {
    if (err) {
      res.json({ ErrorMassage: 'Error while set todo UnDone' });
    } else {
      res.json({ massage: 'Todo is set to UnDone' });
    }
  });
};

// todo async in tutorial i like to try without !!!
exports.deleteTodo = (req, res) => {
  db.run('DELETE FROM todo WHERE id = ?', req.params.id, (err) => {
    if (err) {
      res.json({ ErrorMassage: 'Error delete todo' });
    } else {
      res.json({ massage: 'Todo is deleted' });
    }
  });
};
