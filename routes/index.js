var express = require('express');
var router = express.Router();
const db = require('../src/Database');

/* GET home page. */
router.get('/', function(req, res, next) {

  let SQL = `select * from todo ORDER BY id `;
  db.all(SQL,[], (err, rows) =>{
    if(err) console.error(err);
    res.render('index', { todos: rows });
  });

});



module.exports = router;
