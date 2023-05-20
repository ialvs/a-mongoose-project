const User = require("./models/User");

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
            res.status(201).send();
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
};
