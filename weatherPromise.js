//Example 1: Using Axios and Promises

var express = require('express')
var app = express();
app.set("view engine", "ejs")

//Runs on PORT localhost:7000
var PORT = process.env.PORT || 9000

app.listen(PORT, function(){
  console.log('Server Running');
});

const request = require('request');
const yargs = require('yargs');
//npm install axios --save
const axios = require('axios');

const argv = yargs
	//options to add for the yargs flag typed
	.options({
		//flag used to fetch weather (-a)
		a: {
			demand: true,
			//alternate flag used to fetch weather (-address)
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

	//if you type -a or -address '1301 lombard st philadelphia'
	//, it will show the formatted address, lat, lng 	 
	var encodedAddress = encodeURIComponent(argv.address);
	var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`
	
	//Step 1: geocodeUrl JSON = response
	axios.get(geocodeUrl).then((response)=> {

		//if you type -a or -address '00000'
		if (response.data.status === 'ZERO_RESULTS') {
		
		//create your own error and pass it below. This is error.message.
			throw new Error('Unable to find address')
		} 

		//if you type -a or -address '94014'
		//it will show the formatted address
		console.log(`The status is ${response.data.status}`);

		//
		var lat = response.data.results[0].geometry.location.lat;
		var lng = response.data.results[0].geometry.location.lat;
		
		var weatherUrl = `https://api.darksky.net/forecast/72f3e8894b1e0de0321d0fb93fc71925/${lat},${lng}`
		return axios.get(weatherUrl);	
	//Step 2: weatherUrl JSON = 'response' 
	}).then((response) => {

		app.locals.weatherData = response;
		//if you type -a or -address '94014'
		//it will show temperature and apparentTemperature
		console.log(response)
		var temperature = response.data.currently.temperature;
		var apparentTemperature = response.data.currently.apparentTemperature;
		console.log(`Temp is ${temperature}F and Apparent is ${apparentTemperature}F`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	}).catch((error) => {
		console.log(error);
		if (error.code === 'ERROR NOT FOUND') {
			console.log('Unable to connect to API servers');
		} else {
			console.log(error.message);
		}
	});

app.get("/", function(req, res) {
	res.render('api.ejs');
});


