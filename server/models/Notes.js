// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notes = sequelize.define('Notes', {
    
    text: {
        type: DataTypes.STRING,
        allowNull: true
    }
});


Notes.sync();

module.exports = Notes;
