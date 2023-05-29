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
            const user = await User.findOneAndReplace(
                { _id: idToBeReplaced },
                updatedUser
            );

            if (!user) {
                return res
                    .status(404)
                    .json({ message: "Usuário não encontrado." });
            }

            return res.status(200).json({ message: "Usuário substituído." });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    },

    updateUser: async (req, res) => {
        const { name, password, course, active } = req.body;
        const { idToBeUpdated } = req.params;

        const user = {};

        if (name) {
            user.name = name;
        }

        if (password) {
            user.password = password;
        }

        if (course) {
            user.course = course;
        }

        if (typeof active == "boolean") {
            user.active = active;
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(
                idToBeUpdated,
                user
            );

            if (!updatedUser) {
                return res
                    .status(404)
                    .json({ message: "Usuário não encontrado." });
            }

            return res.status(200).json({ message: "Usuário atualizado." });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    },

    deleteUser: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findByIdAndDelete(id);

            if (!user) {
                return res
                    .status(404)
                    .json({ message: "Usuário não encontrado." });
            }

            return res
                .status(200)
                .json({ message: "Usuário deletado com sucesso." });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    },
};
