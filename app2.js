console.log('starting app2.js')

const _ = require('lodash');
//Allows to add key value pairs in the array 
//Creates an object
const yargs = require('yargs');

//allows to create a new file
const fs = require ('fs');
//allows to fetch things like username
const os = require('os');

const notes2 = require('./notes2.js');


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
	notes2.addNoteProp(argv.title, argv.body) 
} else if (command === 'list') {
	//Type: node app2.js list
	notes2.getAllProp();
} else if (command === 'remove') {
	//Type: node app2.js remove
	notes2.removeAllNotesProp();	
} else {
    console.log('Command not found');
}
 
