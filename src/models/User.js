const mongoose = require("mongoose");

const User = mongoose.model("User", {
    name: String,
    password: String,
    course: String,
    active: Boolean,
});

module.exports = User;
