//***Synchronous code: will load items from top to bottom***
console.log('Starting app');
console.log('Finishing app');

//***Asynchronous code:***

console.log('Starting app'); //executed from main()

setTimeout (() => {
	console.log('First setTimeout');
}, 2000);

setTimeout (() => {
	console.log('Second setTimeout');
}, 0);

console.log('Finishing app'); //executed from main()

//Displays:

//Starting app
//Finishing app
//Second setTimeout
//First setTimeout

//What is happening?

//1)
//console.log('Starting app') then console.log('Starting app') are executed first b/c
//they are part of the main() function. Once they are executed, it is removed from the
//callstack queue. These get executed first before the functions.

//2) 
//This goes to the NODE API's queue, 
setTimeout (() => {
	console.log('First setTimeout');
}, 2000);

//3)
//While the line above is waiting to be executed for 2 seconds,
//this goes straight to the callback queue then gets executed into the callstack queue.
setTimeout (() => {
	console.log('Second setTimeout');
}, 0);

//4)
//When 2 seconds is up, this goes to the callback queue, then goes to the callstack queue
//and is then executed.
setTimeout (() => {



	console.log('First setTimeout');
}, 2000);


//Using callbacks
var getUser = function (id, callback) {
	var user = {
		yourID: id,
		name: "Stebs"
	}
	callback(user)
}

getUser(31, function (userobject) {
	console.log(userobject);	
});

//Displays in console:
//{yourID: 31, name: "Stebs"}
