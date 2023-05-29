const express = require("express");
const {
    createAnUser,
    getAllUsers,
    getUserById,
    replaceUser,
} = require("../controllers/user.controller");
const { validatePostedUser } = require("../middlewares/user.middleware");

const routes = express.Router();

routes.get("/", getAllUsers);
routes.get("/:id", getUserById);

routes.post("/", validatePostedUser, createAnUser);

routes.put("/:idToBeReplaced", validatePostedUser, replaceUser);

module.exports = routes;
