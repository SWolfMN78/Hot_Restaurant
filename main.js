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
        custName: "Jon Snow",
        phone: "555-867-5309",
        email: "WhoDoneIT@YourHouse.com",
        custID: "00012"
    },
    {
        custName: "Matt Smith",
        phone: "555-408-9191",
        email: "ILikeBunnies@YourHouse.com",
        custID: "55839"
    },
    {
        custName: "Noah Jones",
        phone: "555-321-8920",
        email: "LooktoTheSky@Gmail.net",
        custID: "56748961"
    }
];

var reservations = [{
    custName: "",
    phone: "",
    email: "",
    custID: ""
}];