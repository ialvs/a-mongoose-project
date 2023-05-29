const express = require("express");
const {
    createAnUser,
    getAllUsers,
    getUserById,
    replaceUser,
    updateUser,
    deleteUser,
} = require("../controllers/user.controller");
const { validatePostedUser } = require("../middlewares/user.middleware");

const routes = express.Router();

routes.post("/", validatePostedUser, createAnUser);

routes.get("/", getAllUsers);
routes.get("/:id", getUserById);

routes.patch("/:idToBeUpdated", updateUser);
routes.put("/:idToBeReplaced", validatePostedUser, replaceUser);

routes.delete("/:id", deleteUser);

module.exports = routes;
