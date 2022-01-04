const mqtt = require("async-mqtt");
// let connectUrl = `mqtt.eclipseprojects.io:1883`; //previos connectUrl
// let connectUrl = `mqtt://broker.emqx.io:1883`;  // working connectUrl
let connectUrl = `mqtt://155.246.223.11:1883`; // ip address connectUrl

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

 //client.end();
