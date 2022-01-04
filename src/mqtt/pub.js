const mqtt = require("async-mqtt");
var connectUrl = `mqtt://mqtt.eclipseprojects.io:1883`;

const client = mqtt.connect(connectUrl, {
  clean: true,
  connectTimeout: 4000,
  username: "emqx",
  password: "public",
  reconnectPeriod: 1000,
});

const topic = "RajPaynaik";
client.on("connect", function () {
  setInterval(function () {
    let x = Math.random() * 16,
      y = Math.random() * 24;
    let roboString = [x.toString(), y.toString()];

    // let roboString = x.toString();

    console.log(roboString);
    client.publish(topic, `${roboString}`);
  }, 4000);
});

// client.end();
