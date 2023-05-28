const express = require("express");
const { createAnUser } = require("../controllers/user.controller");
const { validatePostedUser } = require("../middlewares/user.middleware");

const routes = express.Router();

routes.post("/", validatePostedUser, createAnUser);

module.exports = routes;
