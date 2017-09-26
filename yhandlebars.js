var express = require('express')
var app = express();
//npm install hbs@4.0.0 --save
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

//Creating a helper function
//To use in handlebars.hbs type: {{testing}}
hbs.registerHelper('testing', () => {
	return 'This is a helper function'
})

hbs.registerHelper('uppercase', (text) => {
	return text.toUpperCase();
})


app.get("/", (req, res) => {
	res.render('handlebars.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Welcome'
	})
});

//Runs on PORT localhost:7000
var PORT = process.env.PORT || 3000

app.listen(PORT, function(){
  console.log('Server Running');
});
