#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https:

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

  fetchAndPrintCharacterNames(characters);
});
