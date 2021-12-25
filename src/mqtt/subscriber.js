const mqtt = require("async-mqtt");
var fs = require("fs");
var connectUrl = `mqtt://mqtt.eclipseprojects.io:1883`;

// Connecting with the publisher
const client = mqtt.connect(connectUrl, {
  clean: true,
  connectTimeout: 4000,
  username: "emqx",
  password: "public",
  reconnectPeriod: 1000,
});

client.on("connect", function () {
  client.subscribe("louis_lidar3", () => {
    console.log("Client has subscribed successfully.");
  });
});

// Receiving the message and converting it into json format
client.on("message", function (topic, message) {
  console.log("Connected");

  let robotData_json = {
    Robot_x: message[0].toString(),
    Robot_y: message[1].toString(),
  };
  console.log(JSON.stringify(robotData_json));

  // reading the json file
  let RobotFile = fs.readFileSync("robot_data.json", "utf-8");
  let parseRoboFile = JSON.parse(RobotFile);

  parseRoboFile.push(robotData_json);
  console.log(parseRoboFile);

  // writing onto json file
  fs.writeFileSync("Robo_test.json", JSON.stringify(parseRoboFile), "utf-8");
});
