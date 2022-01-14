const mongoCollections = require("../config/mongoCollections");
let { ObjectId } = require("mongodb");
const usercoll = mongoCollections.users;
const bcrypt = require("bcryptjs");
const saltRounds = 10;

const exportedMethods = {
    async createUsers(name,email,password,CWID,currentYear) {
        try {
            if (!name || !email || !password || !CWID || !currentYear)
				throw "One of the input paramertes are missing";
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const usersCollection = await usercoll();
            let newUser = {
				name: name,
				email: email,
				password: hashedPassword,
                CWID :CWID,
                currentYear:currentYear,
                robotAngle:[],
				robotDistance: [],
                robotData:[]
			};
            const insertInfo = await usersCollection.insertOne(newUser);
			if (insertInfo.insertedCount === 0) throw "Could not add User";

            const newId = insertInfo.insertedId;
            let user = await this.getUserById(newId.toString());
			user._id = user._id.toString();
			return user;
        } catch (error) {
            return
        }   
    },
    async getUsersById(id){
        if (!id) throw "Please provide a proper ID ";
		if (typeof id != "string") throw "Please provide a String based ID";
		if (id.trim().length === 0) throw "Input ID cannot be blank";
		let parsedId = ObjectId(id);
		const userCollection = await usercoll();
		let user = await userCollection.findOne({ _id: parsedId });

		if (user === null) throw "user not found";
		return user;
    },
    async getAllUsers(){
        const userCollection = await usercoll();
		return await userCollection.find({}).toArray();
    },
}

module.exports = exportedMethods;