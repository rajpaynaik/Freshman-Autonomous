const users = require("./users");

const constructorMethod = (app) => {
	app.use("/", users);

	app.use("*", (req, res) => {
		return res.status(404).json({ error: "Not found" });
	});
};

module.exports = constructorMethod;
