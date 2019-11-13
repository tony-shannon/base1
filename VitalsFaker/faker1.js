const faker = require("faker");
const fs = require("fs");

function generateUsers() {
  let users = [];

  for (let id = 1; id <= 100; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();

    users.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email
    });
  }

  return { data: users };
}

let dataObj = generateUsers();

//console.log(dataObj);
//fs.writeFileSync("data.json", JSON.stringify(dataObj, null, "\t"));
//var DeviceName = "Personal BP Kit";
//var DeviceReading = "BP checkup";
//var DeviceSBP = faker.random.number({ min: 80, max: 160 });
//var DeviceDBP = faker.random.number({ min: 40, max: 75 });
//var DeviceHR = faker.random.number({ min: 60, max: 125 });
//var DeviceTimeStamp = faker.date.recent();

/*
var JSONexample = {
  DName: DeviceName,
  DRead: DeviceReading,
  DSBP: DeviceSBP,
  DDBP: DeviceDBP,
  DHR: DeviceHR,
  DTimeSt: DeviceTimeStamp
}
*/
/* eslint-disable */

function generateVitals() {
  let vitals = [];

  for (let reading = 1; reading <= 15; reading++) {
    let DeviceSBP = faker.random.number({ min: 80, max: 160 });
    let DeviceDBP = faker.random.number({ min: 40, max: 75 });
    let DeviceHR = faker.random.number({ min: 60, max: 125 });
    let DeviceTimeStamp = faker.date.recent();

    vitals.push({
      "DName": "Personal BP Kit",
      "DRead": "BP checkup",
      "DSBP": DeviceSBP,
      "DDBP": DeviceDBP,
      "DHR": DeviceHR,
      "DTimeSt": DeviceTimeStamp
    });
  }

  return { "dataV": vitals };
}
/* eslint-enable */
let VitalsObj = generateVitals();

console.log(VitalsObj);
fs.writeFileSync('/workspace/base1/VitalsFaker/data5.json', JSON.stringify(VitalsObj, null, '\t'));
