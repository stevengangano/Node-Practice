var express = require('express')
var app = express();
app.set("view engine", "ejs")

//Runs on PORT localhost:7000
var PORT = process.env.PORT || 9000

app.listen(PORT, function(){
  console.log('Server Running');
});

//***Building weather app***

//Go to chrome and install json view extension
//Go to https://maps.googleapis.com/maps/api/geocode/json?address=1301 lombard street philadelphia
//used for http requests 
//npm install request@2.73.0 --save
//npm install yargs@4.8.1 --save


const request = require('request');
const yargs = require('yargs');

const argv = yargs
	//options to add for the yargs flag typed
	.options({
		//flag to used to fetch weather (-a)
		a: {
			demand: true,
			//alternate flag used to fetch weather (--address)
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	//adds the help flag (--help)
	.help()
	//you can also use (-h) for the help flag
	.alias('help', 'h')
	.argv;
	
	//if you type -a or -address '1301 lombard st philadelphia'
	//, it will show the formatted address, lat, lng in an object
	
	//{ _: [ 'hanover', 'st', 'daly', 'city', 94014 ],
  	//	help: false,
  	//	h: false,
  	//	a: '1058',
  	//	address: '1058',
  	//	'$0': 'weatherApp.js' }
	//console.log(yargs);

	//{ _: [],
 	// help: false,
  	//h: false,
  	//a: '1058 hanover st daly',
  	//address: '1058 hanover st daly',
  	//'$0': 'weatherApp.js' }
	//console.log(argv)
	 
	var encodedAddress = encodeURIComponent(argv.address);
	console.log(encodedAddress);


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
	
	if (error) {
		console.log('Unable to connect to google servers!')	
	} else if (response.statusCode === 400) {
		console.log('Unable to fetch weather')	
	} else if (body.status === 'ZERO_RESULTS') {
		console.log('Unable to Find Address',)
	} else if (body.status === 'OK' && response.statusCode === 200) {
		//Accessing Properties
		console.log(`Temp: ${body.currently.temperature}`);
		
	}

	//"data" is now a local variable that can be used in view/weather.ejs
	app.locals.data = body;
});

app.get("/", function(req, res) {
	res.render('api.ejs');
});


	//returns '1301%20lombard%20st%20philadelphia'
	encodeURIComponent('1301 lombard st philadelphia');

	//returns '1301 lombard st philadelphia'
	decodeURIComponent('1301%20lombard%20st%20philadelphia');
