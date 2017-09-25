// Example 1

//resolve = success
//reject = error
var somePromise = new Promise((resolve, reject) => {
	resolve('Example 1: Hey. It worked!');
	reject('Unable to fulfill promise');
});

//Displays: Hey. It worked!
somePromise.then((message) => {
	console.log(message);
}, (errorMessage) => {
	console.log(errorMessage);
})

//Displays in console : Hey. It worked!

//Example 2
var asyncAdd = (a, b) => {
	return new Promise ((resolve, reject) => {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a+b);
		} else {
			reject('Arguments must be number');
		}
	});
}

//Call the function here
asyncAdd(5,7).then((sum) => {
	console.log('Example 2: Result = ' + sum);
}, (errorMessage) => {
	console.log(errorMessage)
});

//Displays in console: Result: 12

//Example 3: Chaining promises
asyncAdd(5,7).then((sum) => {
	console.log('Example 3: Results = ' + sum);
	//call the function again (12, 33)
	return asyncAdd(sum, 33);
}, (errorMessage) => {
	console.log(errorMessage)

}).then ((sum) => {
	console.log('Example 3: New result is: ' + sum);
}, (errorMessage) => {
	console.log(errorMessage);
});

//Displays in console;

//Result: 12
//New result is: 45

//Example 4: Using .catch for errors
asyncAdd(5,'7').then((sum) => {
	console.log('Example 4: Result = ' + sum);
	//call the function again (12, 33)
	return asyncAdd(sum, 33); 
}).then ((sum) => {
	console.log('New result is: ' + sum);
}).catch((errorMessage) => {
	console.log('Example 4: ' + errorMessage);
});

