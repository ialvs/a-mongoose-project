const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route");

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRoute);

const connectionString = process.env.CONNECTION_STRING;

mongoose
    .connect(connectionString)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => console.log(`Starting at port ${port}`));
    })
    .catch(error => console.log(error));
