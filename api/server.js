const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
var cors = require("cors");

app.use(cors());

app.use(express.json());

// Serve a JSON file
app.get("./data/data.json", (req, res) => {
  const filePath = path.join(__dirname, "/data/data.json");
  console.log(`Attempting to read file from path: ${filePath}`);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      res.status(500).send("Error reading the file");
    } else {
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (parseError) {
        console.error(`Error parsing JSON: ${parseError.message}`);
        res.status(500).send("Error parsing JSON");
      }
    }
  });
});

module.exports = app;
