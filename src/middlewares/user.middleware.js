module.exports = {
    validatePostedUser: (req, res, next) => {
        const { name, password, course, active } = req.body;

        if (!name) {
            return res
                .status(400)
                .json({ messagem: "User name must be informed" });
        }

        if (!password) {
            return res.status(400).json({
                messagem: "User password must be informed",
            });
        }

        if (!course) {
            return res
                .status(400)
                .json({ messagem: "User course must be informed" });
        }

        if (typeof active !== "boolean") {
            return res.status(400).json({
                messagem: "User availability must be informed (as true/false)",
            });
        }

        next();
    },
};
