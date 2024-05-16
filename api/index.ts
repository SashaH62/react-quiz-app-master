const express = require("express");
const app = express();
const port = 5000;
const fs = require("fs");
const path = require("path");
var cors = require("cors");

app.use(cors());

app.use(express.json());

// Serve a JSON file
app.get("/data/data.json", (req, res) => {
  const filePath = path.join(__dirname, "data/data.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading the file");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
