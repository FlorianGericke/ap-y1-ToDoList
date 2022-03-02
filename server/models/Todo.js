const Sequelize = require('sequelize');
const sequelize = require('../util/Database');

const Todo = sequelize.define("todo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    task: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priority: {
        type: Sequelize.INTEGER
    },
    done: {
        type: Sequelize.BOOLEAN
    }
});

module.exports = Todo;
