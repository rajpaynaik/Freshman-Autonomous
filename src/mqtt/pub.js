const mqtt = require("async-mqtt");
// var connectUrl = `mqtt://mqtt.eclipseprojects.io:1883`;
var connectUrl = `mqtt://broker.emqx.io:1883`;

const client = mqtt.connect(connectUrl, {
  clean: true,
  connectTimeout: 1000,
  // username: "emqx",
  // password: "public",
  username: "emqx_test",
  password: "emqx_test",
  reconnectPeriod: 1000,
});

const topic = "RajPaynaik";
client.on("connect", function () {
  setInterval(function () {
    let x = Math.random() * 50,
      y = Math.random() * 50;
    let roboString = [x.toString(), y.toString()];

    // let roboString = x.toString();

    console.log(roboString);
    client.publish(topic, `${roboString}`);
  }, 4000);
});

// client.end();
