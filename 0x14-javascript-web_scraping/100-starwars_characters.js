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

  // Function to fetch character names and print them
  function fetchAndPrintCharacterNames(characterUrls) {
    characterUrls.forEach(url => {
      request(url, function (error, response, body) {
        if (error) {
          console.error('Error fetching character:', error);
        } else {
          const characterData = JSON.parse(body);
          console.log(characterData.name);
        }
      });
    });
  }

  // Print characters
  fetchAndPrintCharacterNames(characters);
});
