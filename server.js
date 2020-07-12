// Require the Express
const express = require("express");

const fs = require("fs");
const path = require("path");
var http = require("http");

// Create an express server.
const app = express();

// Set port.
const PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

 // GET request
 app.get("/notes", (request, response) => {

    response.sendFile(path.join(__dirname, "public", "notes.html"));
    console.log("Note created!");
})

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "public", "index.html"));
    console.log("Your index!");
})



// LISTENER
// Listen on port.
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});