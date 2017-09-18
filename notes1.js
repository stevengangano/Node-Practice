console.log('starting notes.js')
 
//module is an object.
// console.log(module)
 
//This allows age to be used in app.js
module.exports.age = 25;
 
//Exporting a function
// Same as function () {} aka anonymous function
module.exports.addNote = () => {
	console.log('addNote');
};
 
//Same as function () {} aka anonymous function
module.exports.add = (a,b) => {
                return a + b;
};
 