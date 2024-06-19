const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let userData = [];

// Endpoint to save searched city weather data
app.post("/api/userdata", (req, res) => {
  const { city, temperature } = req.body;
  userData.push({ city, temperature });
  res.status(201).send("User data saved");
});

// Endpoint to get the history of searched cities
app.get("/api/userdata", (req, res) => {
  res.json(userData);
});

// Endpoint to clear the history of searched cities
app.post("/api/clearhistory", (req, res) => {
  userData = [];
  res.status(200).send("History cleared");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
