var fs = require("fs");
let RobotFile = fs.readFileSync("robot_data.json", "utf-8");
let distanceFile = fs.readFileSync("distance.json", "utf-8");
let parseRoboFile = JSON.parse(RobotFile);
let parseDistanceFile = JSON.parse(distanceFile);

// console.log(parseRoboFile);
// console.log(parseRoboFile[0].Robot_X_Position);

for (let i = 0; i < parseRoboFile.length - 1; i++) {
  let distance = Math.sqrt(
    Math.pow(
      parseRoboFile[i + 1].Robot_X_Position - parseRoboFile[i].Robot_X_Position,
      2
    ) +
      Math.pow(
        parseRoboFile[i + 1].Robot_Y_Position -
          parseRoboFile[i].Robot_Y_Position,
        2
      )
  );

  let distanceCal = {
    seconds: (i + 1) * 20,
    RobotX: parseRoboFile[i].Robot_X_Position,
    RobotY: parseRoboFile[i].Robot_Y_Position,
    distance: distance,
  };
  parseDistanceFile.push(distanceCal);

  // console.log(distance);
}

fs.writeFileSync("distance.json", JSON.stringify(parseDistanceFile), "utf-8");
