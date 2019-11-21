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
      type: "UserType",
      first_name: firstName,
      last_name: lastName,
      email: email
    });
  }

  return { data: users };
}

let dataObj = generateUsers();



console.log(dataObj);
fs.writeFileSync('fakeData1.json', JSON.stringify(dataObj, null, '\t'));