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

    getUserById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findById(id);
            if (!user) {
                return res
                    .status(404)
                    .json({ message: "Usuário não encontrado." });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    },

    replaceUser: async (req, res) => {
        const { name, password, course, active } = req.body;
        const { idToBeReplaced } = req.params;

        const updatedUser = {
            name,
            password,
            course,
            active,
        };

        try {
            await User.findOneAndReplace({ _id: idToBeReplaced }, updatedUser);
            return res.status(200).send();
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    },
};
