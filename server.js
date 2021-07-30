// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// Setup Server

const port = 8000;
const server = app.listen(port, listiening());

function listiening() {
  console.log("Server Is Running");
  console.log(`Running on localhost: ${port}`);
}

// get function

app.get("/all", sendData);

function sendData(req, res) {
  res.send(projectData);
  projectData = {};
}

// post function

app.post("/add", addData);

function addData(req, res) {
  console.log(req.body);
  projectData.name = req.body.name;
  projectData.date = req.body.date;
  projectData.temp = req.body.temp;
  projectData.content = req.body.content;
  res.send({ msg: "Post Received" });
}
