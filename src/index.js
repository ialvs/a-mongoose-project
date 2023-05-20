const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const port = process.env.port;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connectionString = `mongodb+srv://${process.env.USER_MONGODB}:${process.env.PASSWORD_MONGODB}@cluster0.4qh4koq.mongodb.net/`;

mongoose
    .connect(connectionString)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => console.log(`Starting at port ${port}`));
    })
    .catch(error => console.log(error));
