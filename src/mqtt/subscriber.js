const mqtt = require("async-mqtt");
var fs = require("fs");
// let connectUrl = `mqtt.eclipseprojects.io:1883`; //previos connectUrl
//let connectUrl = `mqtt://broker.emqx.io:1883`; // working connectUrl
let connectUrl = `mqtt://192.168.0.100:1883`; // ip address connectUrl
//192.168.0.100
//155.246.223.11

// Connecting with the publisher
const client = mqtt.connect(connectUrl, {
  clean: true,
  connectTimeout: 4000,
  // username: "emqx", //previos connectUrl
  // password: "public", //previos connectUrl

  // clientId: "emqx_test", // working connectUrl
  // username: "emqx_test", // working connectUrl
  // password: "emqx_test", // working connectUrl

  username:"", // ip address connectUrl
  password:"", // ip address connectUrl
  reconnectPeriod: 1000,
});
//console.log(client)
// 155.246.223.11
client.on("connect", function () {
  // louislidar3
  client.subscribe("louis_lidar3", () => {
    console.log("Client has subscribed successfully.");
  });
});

// Receiving the message and converting it into json format
client.on("message", function (topic, message) {
  console.log(message.toString())
let coordinates = message.toString();
let coordinatesArr = coordinates.split(',')
  console.log("Connected");
  let robotData_json = {
    Robot_X_Position: coordinatesArr[0],
    Robot_Y_Position: coordinatesArr[1],
  };
  console.log(JSON.stringify(robotData_json));

  // reading the json file
  let RobotFile = fs.readFileSync("robot_data.json", "utf-8");
  let parseRoboFile = JSON.parse(RobotFile);

  parseRoboFile.push(robotData_json);
  console.log(parseRoboFile);

  // writing onto json file
  fs.writeFileSync("robot_data.json", JSON.stringify(parseRoboFile), "utf-8");
});