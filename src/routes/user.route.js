const express = require("express");
const {
    createAnUser,
    getAllUsers,
    getUserById,
    replaceUser,
    updateUser,
} = require("../controllers/user.controller");
const { validatePostedUser } = require("../middlewares/user.middleware");

const routes = express.Router();

routes.post("/", validatePostedUser, createAnUser);

routes.get("/", getAllUsers);
routes.get("/:id", getUserById);

routes.patch("/:idToBeUpdated", updateUser);
routes.put("/:idToBeReplaced", validatePostedUser, replaceUser);

module.exports = routes;
