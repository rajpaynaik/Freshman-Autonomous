const express = require("express");
const router = express.Router();
const data = require("../data");
const usersData = data.users;
const bcrypt = require("bcryptjs");
const saltRounds = 10;

router.get("/", async (req, res) => {
	try {
		const usersDatas = await usersData.getAllUsers();
		return res.json("we have a server running...");
	} catch (e) {
		return res.status(500).json({ error: e });
	}
});

router.post("/create", async (req, res) => {
    const userInfo = req.body;
    if (!userInfo) {
		res.status(400).json({ error: "Please provide data to create a Blog" });
		return;
	}
    if (!userInfo.name || userInfo.name.trim() === null) {
		res.status(400).json({ error: "Please Provide User Name" });
		return;
	}
    if (!userInfo.email || userInfo.email.trim() === null) {
		res.status(400).json({ error: "Please Provide Email" });
		return;
	}
    if (!userInfo.password || userInfo.password.trim() === null) {
		res.status(400).json({ error: "Please Provide password" });
		return;
	}
    if (!userInfo.CWID || userInfo.CWID.trim() === null) {
		res.status(400).json({ error: "Please Provide User CWID" });
		return;
	}
    if (!userInfo.currentYear || userInfo.currentYear.trim() === null) {
		res.status(400).json({ error: "Please Provide User Name" });
		return;
	}
    try {
        const {name,email,password,CWID,currentYear} = userInfo
        const newUser = await usersData.createUsers(
            name,email,password,CWID,currentYear
        )
        return res.json(newUser);
    } catch (e) {
        return res.status(500).json({ error: e });
    }
});

module.exports = router;