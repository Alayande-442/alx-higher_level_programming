#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error('Failed to retrieve data. Status code:', response.statusCode);
    return;
  }

  const films = body.results || [];
  let count = 0;

  films.forEach(film => {
    film.characters.forEach(character => {
      if (character.includes(`/api/people/${characterId}/`)) {
        count++;
      }
    });
  });

  console.log(count);
});
