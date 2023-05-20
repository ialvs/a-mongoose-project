const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.port;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => console.log(`Starting at port ${port}`));
