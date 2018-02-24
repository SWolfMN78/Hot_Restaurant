var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express(); //creating express 
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//listening to port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

//create variables to contain information for the rest. & res.
var waitlist = [{
    custName: "",
    phone: "",
    email: "",
    custID: ""
}];

var reservations = [{
    custName: "",
    phone: "",
    email: "",
    custID: ""
}];