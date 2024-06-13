#!/usr/bin/node

const fs = require("fs");

const filePath = process.argv[2];

const stringToWrite = process.argv[3];

if (!filePath || !stringToWrite) {
  console.error(
    "Please provide both a file path and a string to write as arguments."
  );
  process.exit(1);
}

fs.writeFile(filePath, stringToWrite, "utf-8", (err) => {
  if (err) {
    console.error("Error writing to the file:", err);
  } else {
    console.log("String written to file successfully.");
  }
});
