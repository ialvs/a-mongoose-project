const User = require("../models/User");

module.exports = {
    createAnUser: async (req, res) => {
        const { name, password, course, active } = req.body;
        const user = {
            name,
            password,
            course,
            active,
        };

        try {
            await User.create(user);
            return res.status(201).send();
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    },
};
