const faker = require("faker");
const fs = require("fs");

function MakeDOB(DOBin){
    var date = DOBin.getDate();
    var month = DOBin.getMonth();
    var year = DOBin.getFullYear();

    function pad(n) {
        return n<10 ? '0'+n : n
    }

    var DOBout = pad(date) + "-" + pad(month + 1) + "-" + year;
    return DOBout;
}


function generatePatients() {
  let patients = [];

  for (let id = 1; id <= 100; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let city = faker.address.city();
    let street = faker.address.streetAddress();
    let DOB = faker.date.between('2-4-1940', '1-1-2010');
    let DOB_data = MakeDOB(DOB);
    let idN = id;
    let HSid= faker.random.number();
    let phone = faker.phone.phoneNumber();


    patients.push({
            "address": [
                {
                "city": city,
                "country": "United Kingdom",
                "district": "Yorks",
                "line": [
                    street
                ],
                "postalCode": "LS1"
                }
            ],
            "birthDate": DOB_data,
            "deceasedBoolean": false,
            "gender": "male",
            "id": idN,
            "identifier": [
                {
                "system": "https://fhir.nhs.uk/Id/nhs-number",
                "value": HSid
                }
            ],
            "name": [
                {
                "family": lastName,
                "given": [
                    "John"
                ],
                "prefix": "Mr"
                }
            ],
            "resourceType": "Patient",
            "telecom": phone
                            }
      );
  }

  return { Patients: patients };
}

let dataObj = generatePatients();



console.log(dataObj);
fs.writeFileSync('fakeData2.json', JSON.stringify(dataObj, null, '\t'));