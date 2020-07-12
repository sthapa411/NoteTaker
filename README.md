# NoteTaker

Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file using - 


GET /notes - to return the notes.html file.


GET * - to return the index.html file

The application has a db.json file on the backend that is used to store and retrieve notes using the fs module.


The following API routes is created:


GET /api/notes - to read the db.json file and return all saved notes as JSON.


POST /api/notes - to receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.


DELETE /api/notes/:id - to receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

[!Notetaker.png](https://github.com/sthapa411/NoteTaker/blob/master/Notetaker.png)
![NewNote.png](https://github.com/sthapa411/NoteTaker/blob/master/NewNote.png)
