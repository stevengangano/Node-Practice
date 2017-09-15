console.log('starting app3.js')

const _ = require('lodash');
//Allows to add key value pairs in the array 
const yargs = require('yargs');

//allows to create a new file
const fs = require ('fs');
//allows to fetch things like username
const os = require('os')

const argv = yargs.argv;
console.log (argv)
console.log(process.argv)
// var command = process.argv[2];
// console.log('Command: ' + command);