//Setting up routes
var express = require('express');

var bodyParser = require('body-parser');

var path = require('path');

//Setting up express routes
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Setting up html routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//Setting up port listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});