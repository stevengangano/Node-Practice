console.log('starting Qpracticenotes.js');

const fs = require('fs');

var fetchNotes = function () {
	//this prevents an error from happening
	try {
		//this fetches the notes 
		//this allows for multiples notes to be added to practice-notes-data.json
		var notesString = fs.readFileSync('Qpractice-notes-data.json');
		//converts notes into JSON data (string)
		return JSON.parse(notesString);
	} catch (err) {
		return [];
	}
}

var saveNotes = function(notes) {
	//saves the notes to notes-data.json as an object
	fs.writeFileSync('Qpractice-notes-data.json', JSON.stringify(notes));
}


//to add a note type: node Qpractice.js remove --title="" --body=""
var addNote = (title, body) => {
	//this holds the notes data
	var notes = fetchNotes();
	var note = {
		title: title,
		body: body
	}

	//this checks for a duplicate title
	//if there is a dupicate, it will return the title which has a length
	//if there is not a duplicate, it will not return anything, which is length 0
	var duplicateNotes = notes.filter((note) => note.title === title);


	//if the title being added does not exist, then it will push the note
	if(duplicateNotes.length === 0 ) {
		//push note into notes
		notes.push(note);
		//saves the notes to notes-data.json as an object
		//"notes" is from var = notes
		saveNotes(notes);
		//"note" is defined from Qpractice.js "var = note"
		return note;
	}


};

//to remove a note type: node Qpractice.js remove --title=""
var removeANote = (title) => {
	console.log("Removing A notes");
	//fetches notes array
	var notes = fetchNotes();
	//return true if note.title does not equal the title we are typing into the console
	var filteredNotes = notes.filter((note) => note.title !== title)
	//save new notes to notes-data.json as an object with removed note 
	saveNotes(filteredNotes);
	//checks if the array "notes" is equal to "filternedNotes" array
	//if they are not equal, it will return true because a note was removed
	return notes.length !== filteredNotes.length;

}

////to show all notes type: node Qpractice.js list
var getAll = () => {
	console.log("Getting all notes");
	return fetchNotes();
}

//to check if a title with car exists: node Qpractice.js read --title=car
//Checks if a note exists
var getNotes = (title) => {
    console.log("Getting all notes");
    //fetches all the notes
    var notes = fetchNotes();
    //filters the notes to see if the title typed in the console, matches the title in the array
    var filteredNotes = notes.filter((note) => {
    	//it will return true if the title matches
    	return note.title === title
    });
    //if there is a match or true, it will return the first item in the array
    return filteredNotes[0]
}

var logNote = (note) => {
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

module.exports = {
	addNoteProp: addNote,
	getAllProp: getAll,
	removeANoteProp: removeANote,
	getNotesProp: getNotes
}