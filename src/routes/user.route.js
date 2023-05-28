const express = require("express");
const { createAnUser, getAllUsers } = require("../controllers/user.controller");
const { validatePostedUser } = require("../middlewares/user.middleware");

const routes = express.Router();

routes.get("/", getAllUsers);
routes.post("/", validatePostedUser, createAnUser);

module.exports = routes;
