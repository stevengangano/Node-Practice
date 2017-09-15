console.log('starting notes2.js');

var addNote = (title, body) => {
	console.log(title, body);
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