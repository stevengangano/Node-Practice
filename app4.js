const fs = require('fs');
 
var originalNote = {
    title: 'Some title',
    body: 'Some body'
}
 
//Turns "originalNote" into a string
var originalNoteString = JSON.stringify(originalNote);
//This is a string
console.log(originalNoteString);
//originalNoteString is written into notes.json
fs.writeFileSync('notes4.json', originalNoteString);
 
//This grabs the data from notes.json
var noteString = fs.readFileSync('notes4.json');
//Turns "noteString" into an object
var note = JSON.parse(noteString);
console.log(typeof note);
//Displays Some title
console.log(note.title);
//Displays Some body
console.log(note.body);
