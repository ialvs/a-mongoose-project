const express = require("express");
const { createAnUser } = require("../controllers");
const { validatePostedUser } = require("../middlewares");

const routes = express.Router();

routes.post("/", validatePostedUser, createAnUser);

module.exports = routes;
