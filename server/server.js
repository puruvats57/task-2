const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Client } = require('pg');
const sequelize = require('./config/database');
//require('./models/User');
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const appController = require("./controllers/appController");


sequelize.authenticate()
    .then(() => {
        console.log('Connection to PostgreSQL database has been established successfully.');
        
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



app.post("/register", appController.register);
app.delete("/delete/:id", appController.delete);
// app.patch("/update/:id", appController.update);
app.get("/getAll", appController.getAll);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



