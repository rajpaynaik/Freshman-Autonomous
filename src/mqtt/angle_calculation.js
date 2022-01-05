var fs = require("fs");
let RobotFile = fs.readFileSync("robot_data.json", "utf-8");
// let distanceFile = fs.readFileSync("distance.json", "utf-8");
let parseRoboFile = JSON.parse(RobotFile);
let slope = [];

for (let i = 0; i < parseRoboFile.length - 1; i++) {
  let slopeCal =
    (parseRoboFile[i + 1].Robot_Y_Position -
      parseRoboFile[i].Robot_Y_Position) /
    (parseRoboFile[i + 1].Robot_X_Position - parseRoboFile[i].Robot_X_Position);
}
//   parseDistanceFile.push(distanceCal);

// fs.writeFileSync("distance.json", JSON.stringify(parseDistanceFile), "utf-8");
