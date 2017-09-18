console.log('starting app')

//Node library can be found node.org/api
//documentation is on lodash.com


//allows to create a new file
const fs = require ('fs');
//allows to fetch things like username
const os = require('os');
const notes = require('./notes1.js');
const _ = require('lodash');

// console.log(user); 
var user = os.userInfo();

 
//ES6 syntax
//This creates  a file called greetings.txt
//Then displays greetings.txt
fs.appendFileSync('greetings.txt', `Hello World! `);
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`); 
fs.appendFileSync('greetings.txt', `You are ${notes.age}!`);                        
 
 
//This displays "addNote" in console
var res = notes.addNote();
console.log(res);
 
// This displays "11" in console
var sum = notes.add(9, 2);
console.log(sum);
 
//Using methods from lodash
 
// displays false in console
console.log(_.isString(true));
// displays true console
console.log(_.isString('Andrew'));
// removes duplicates in array
// displays [1,2,4,5]
var array = _.uniq([1,2,4,4,5]);
console.log(array)
 