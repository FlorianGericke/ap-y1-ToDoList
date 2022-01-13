var express = require('express');
var router = express.Router();
const db = require('../src/Database');

router.post('/add', function(req, res, next) {
    let SQL = `INSERT INTO todo (task,priority,done) VALUES (?,?,?)`;
      db.run(SQL,[req.body.task, parseInt(req.body.priority), req.body.done],err =>{
        res.redirect("/");
      })
});


router.put('/done/:id', function(req, res, next) {
  let SQL = `UPDATE todo SET done = true WHERE id = ?`
  db.run(SQL,req.params.id,err =>{
    res.json({msg: `${req.params.id} is done`});
  });
});

router.delete('/delete/:id', function(req, res) {
  let SQL = `SELECT * FROM todo WHERE id = ?`;
  db.all(SQL,req.params.id, (err,rows) =>{
    SQL = `DELETE FROM todo WHERE id = ?`;
    db.run(SQL,req.params.id,(err) =>{
      res.json(err ? {databaseError: err} : {deleted: rows});
    });
  });
});



module.exports = router;
