const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('employee', 'postgres', 'puru', {
    host: 'localhost',
    dialect: 'postgres'
})
module.exports = sequelize;