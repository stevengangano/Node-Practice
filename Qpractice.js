console.log('starting practice1.js')

const _ = require('lodash');
//Allows to add key value pairs in the array 
//Creates an object
const yargs = require('yargs');

//allows to create a new file
const fs = require ('fs');
//allows to fetch things like username
const os = require('os');

const qnotes = require('./Qpracticenotes.js');


//To create a command in the array, type " nodeapp2.js list" in the command line
//This creates a command called "list"
//Accessing date from command line
const argv = yargs.argv;
var command = process.argv[2]; //or
var command = argv._[0]
console.log('Process: ', process.argv);
console.log('Command: ', command);
//Creates an object below. If you type node "app.js list encrypted",
//Yargs:  { _: [ 'list', 'encrypted' ], '$0': 'app2.js' }
//If you type "node app2.js add --title=secrets",
//Yargs:  { _: [ 'add' ], title: 'secrets', '$0': 'app2.js' }
console.log('Yargs: ', argv)

    
//To check if a command exists
if (command === 'add') {
	//Type: node app2.js add --title="Secret" --body="This is my Secret" 
	var note = qnotes.addNoteProp(argv.title, argv.body) 
	//if a note is created
	if (note) {
		console.log('Note created');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	} else {
		//else create
		console.log('Note title taken')
	}
} else if (command === 'list') {
	//fetches all the notes
	var allNotes = qnotes.getAllProp();
	console.log(`Printing ${allNotes.length} notes.`)
	//loops through the array of notes
	allNotes.forEach((note) => {
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);	
	});
} else if (command === 'read') {
     var note = qnotes.getNotesProp(argv.title);
     if (note) {
        console.log('Note read');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`); 
    } else {
       console.log('Note not found');
    }
} else if (command === 'remove') {
	//Type: node app2.js remove
	var noteRemoved = qnotes.removeANoteProp(argv.title);	
	//if noteRemoved passes, note was removed else note not found 
	var message = noteRemoved ? 'Note was removed ' : 'Note not found';
	console.log(message);
} else {
    console.log('Command not found');
}
 
