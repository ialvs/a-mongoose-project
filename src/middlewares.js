module.exports = {
    validatePostedUser: (req, res, next) => {
        const { name, password, course, active } = req.body;

        if (!name) {
            res.status(400).json({ messagem: "User name must be informed" });
        }

        if (!password) {
            res.status(400).json({
                messagem: "User password must be informed",
            });
        }

        if (!course) {
            res.status(400).json({ messagem: "User course must be informed" });
        }

        if (typeof active !== "boolean") {
            res.status(400).json({
                messagem: "User availability must be informed (as true/false)",
            });
        }

        next();
    },
};
