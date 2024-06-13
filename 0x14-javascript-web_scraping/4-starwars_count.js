#!/usr/bin/node

const request = require("request");
const apiUrl = process.argv[2];

request(apiUrl, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const films = JSON.parse(body).results;
    let count = 0;
    for (const filmItems in films) {
      const filmChars = films[filmItems].characters;
      for (const charIndex in filmChars) {
        if (filmChars[charIndex].includes("18")) {
          count++;
        }
      }
    }
    console.log(count);
  } else {
    console.log("An error occured. Status code: " + response.statusCode);
  }
});

