#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error('Usage: ./script.js <URL> <file path>');
  process.exit(1);
}

request(url, (error, response, body) => {
  if (error) {
    console.error('Error while requesting the URL:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch URL. Status code:', response.statusCode);
    process.exit(1);
  }

  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) {
      console.error('Error while writing to file:', err);
      process.exit(1);
    }
  });
});
