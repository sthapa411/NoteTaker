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

//db json
app.get("/api/notes", (request, response) => {

    fs.readFile(path.join(__dirname, "db", "db.json"), 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString)
        response.json(JSON.parse(jsonString));
        
    })
})

//Post
app.post("/api/notes", function (request, response) {

    fs.readFile(path.join(__dirname, "db", "db.json"), 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString);
        var notes = JSON.parse(jsonString);

        
        const newNote = {
            title: request.body.title,
            text: request.body.text,
            id: Math.random().toString(36).substr(2, 9)
        };


        notes.push(newNote);
        let NotesJSON = JSON.stringify(notes);
        

        fs.writeFile(path.join(__dirname, "db", "db.json"), NotesJSON, (err) => {
            if (err) {
                return console.log(err);
            }

            console.log("Success!", NotesJSON);
            return NotesJSON;
        });

    })

});


// delete
app.delete('/api/notes/:id', function (request, response) {

 
    fs.readFile(path.join(__dirname, "db", "db.json"), 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString);
        
                var notes = JSON.parse(jsonString);

        const newNote = {
            title: request.body.title,
            text: request.body.text,
            id: Math.random().toString(36).substr(2, 9)
        };

        
        notes.splice(request.params.id, 1);
       
        let NotesJSON = JSON.stringify(notes);
        

        fs.writeFile(path.join(__dirname, "db", "db.json"), NotesJSON, (err) => {
            if (err) {
                return console.log(err);
            }
            
            console.log("Success!", NotesJSON);
            return NotesJSON;
        });

    })

});


// LISTENER
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});