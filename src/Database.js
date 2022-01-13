var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

const todos = require('../todos.json');

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE todo (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                task CHAR(100),
                priority check((priority >= 1)&(priority <= 4)),
                done INT check(done == 0 || done == 1)
                )`,
            (err) => {
                if (err) {
                    // Table already created
                    console.error(err);
                } else {
                    console.log("Table successfully created.")

                    let SQL = `INSERT INTO todo(task,priority,done) VALUES (?,?,?)`;
                    todos.forEach(todo => db.run(SQL, [todo.task, todo.priority, todo.done]));
                }
            });
    }
});



module.exports = db
