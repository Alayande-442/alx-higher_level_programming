#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
    return;
  }
  
  if (response.statusCode !== 200) {
    console.error('Error:', `Status code ${response.statusCode}`);
    return;
  }

  const filmData = JSON.parse(body);
  const characters = filmData.characters;

  // Function to fetch and print character names
  function fetchAndPrintCharacterNames(characterUrls) {
    const promises = characterUrls.map(url => {
      return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
          if (error) {
            reject(error);
          } else {
            const characterData = JSON.parse(body);
            resolve(characterData.name);
          }
        });
      });
    });

    // Resolve all promises and print character names
    Promise.all(promises)
      .then(characterNames => {
        characterNames.forEach(name => console.log(name));
      })
      .catch(error => {
        console.error('Error fetching character:', error);
      });
  }

  // Print characters
  fetchAndPrintCharacterNames(characters);
});
