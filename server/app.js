console.clear();
require("./config/mongoConnection");
const express = require("express");
const cors = require("cors");

const configRoutes = require("./routes");
const app = express();

app.use(express.json());


configRoutes(app);
app.listen(3000, () => {
	console.log("We've now got a server!");
	console.log("Your routes will be running on http://localhost:3000");
});