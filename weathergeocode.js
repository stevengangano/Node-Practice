var express = require('express')
var app = express();
const request = require('request');

var geocodeAddress = (address) =>  {
	var encodedAddress = encodeURIComponent(address);

	request ({
	//injuct into here
	url: `https://api.darksky.net/forecast/72f3e8894b1e0de0321d0fb93fc71925/37.7045585,-122.4565595`,
	//this converts json to an object
	json: true
	}, (error, response, body) => {
	//this returns the json data
	//console.log(body);

	//returns the whole JSON object
	//(body, undefined, and spaces per indentation) when the data is returned
	//console.log(JSON.stringify(body, undefined, 2));

	//returns an object and shows status code. 200 means successfully returned
	//console.log(JSON.stringify(body, undefined, 2));

	//"code" property is most important b/c it shows if connected to the url
	//console.log(JSON.stringify(error, undefined, 2));
	

		//Accessing Properties
		console.log(body.currently.temperature);



	//"data" is now a local variable that cabe used in view/weather.ejs
	app.locals.data = body;
	});
}

app.get("/", function(req, res) {
	res.render('weather.ejs');
});

module.exports.geocodeAddress = geocodeAddress;