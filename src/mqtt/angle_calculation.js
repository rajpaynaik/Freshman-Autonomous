var fs = require("fs");
let RobotFile = fs.readFileSync("robot_data.json", "utf-8");
let angleFile = fs.readFileSync("angle.json", "utf-8");
let parseRoboFile = JSON.parse(RobotFile);
let parseAngleFile = JSON.parse(angleFile);

for (let i = 0; i < parseRoboFile.length - 1; i++) {
  let dy =
    parseRoboFile[i + 1].Robot_Y_Position - parseRoboFile[i].Robot_Y_Position;
  let dx =
    parseRoboFile[i + 1].Robot_X_Position - parseRoboFile[i].Robot_X_Position;

  let thetha = Math.atan2(dy, dx);

  thetha *= 180 / Math.PI;

  let angleCal = {
    seconds: (i + 1) * 20,
    RobotX: parseRoboFile[i].Robot_X_Position,
    RobotY: parseRoboFile[i].Robot_Y_Position,
    angle: thetha,
  };
  parseAngleFile.push(angleCal);
}

fs.writeFileSync("angle.json", JSON.stringify(parseAngleFile), "utf-8");
