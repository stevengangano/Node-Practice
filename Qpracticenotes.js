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

var addNote = (title, body) => {
	var notes = fetchNotes;
	var note = {
		title: title,
		body: body
	}

	//this checks for a duplicate title
	//if there is a dupicate, it will return the title
	//of the duplcate otherwise it will not return anything
	var duplicateNotes = notes.filter((note) => note.title === title);

	//if the note is not a duplicate, then it will
	if(duplicateNotes.length === 0 ) {
		//push note into notes
		notes.push(note);
		//saves the notes to notes-data.json as an object
		//"notes" is from var = notes
		saveNotes(notes);
	}


};

var getAll = () => {
	console.log("Getting all notes");
}

var removeAllNotes = () => {
	console.log("Removing all notes");
}

module.exports = {
	addNoteProp: addNote,
	getAllProp: getAll,
	removeAllNotesProp: removeAllNotes
}