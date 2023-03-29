const {Sequelize} = require('sequelize');

let sequelize = new Sequelize('Assignment-todolists', 'root', 'password', {
    dialect: 'mysql',
    dialectOptions: {
        socketPath: '/tmp/mysql.sock' 
    },
    host: 'localhost',
});

module.exports = sequelize;
