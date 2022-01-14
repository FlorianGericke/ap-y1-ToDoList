const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = './server/db/database.sqlite';

const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to new Database');
    db.run(`CREATE TABLE todo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task CHAR(50),
            priority INTEGER CHECK ( priority > 0 & todo.priority < 5 ),
            done INTEGER CHECK ( done == 0 | done = 1 )   
        );`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Table to is created');
        db.run('INSERT INTO todo(task,priority,done) VALUES (?,?,?)', ['Beispiel Task', 1, false], (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('New entry in database');
          }
        });
      }
    });
  }
});

// log all entities of the Database. Just for debugging.
db.all('SELECT * FROM todo', [], (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    rows.forEach((row) => console.log(row));
  }
});

module.exports = db;
