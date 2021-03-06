var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express(); //creating express 
var PORT = 3000;
//CRUD--CREATE/READ/UPDATE/DELETE

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//listening to port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

//create variables to contain information for the rest. & res.
var waitinglist = [{
        custName: "Jon Snow",
        phone: 555 - 867 - 5309,
        email: "WhoDoneIT@YourHouse.com",
        custID: 00012
    },
    {
        custName: "Matt Smith",
        phone: 555 - 408 - 9191,
        email: "ILikeBunnies@YourHouse.com",
        custID: 55839
    },
    {
        custName: "Noah Jones",
        phone: 555 - 321 - 8920,
        email: "LooktoTheSky@Gmail.net",
        custID: 56748961
    }
];

//tables mock data
var tables = [{
    custName: "Shakira",
    phone: 5678904560,
    email: "hipsdontlie@gmail.com",
    custID: 234
}, {
    custName: "Dorothy Dandridge",
    phone: 3456789080,
    email: "singerfor lyfe@gmail.com",
    custID: 345
}, {
    custName: "Jessye Norman",
    phone: 3456785670,
    email: "bestsoprano@gmail.com",
    custID: 123
}];

//routs to display the HTML.
app.use(express.static(__dirname + '/assets'));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/waitinglist", function(req, res) {
    res.sendFile(path.join(__dirname, "waitinglist.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

//routes for CRUD information.

/*Get the entire list of tables
    // app.get("/all", function(req, res) {
    //     return res.json(compliedList);
    //}); */

// Search for a specific reservation.
app.get("/api/tables", function(req, res) {
    var choseRes = req.param.tables;

    if (choseRes) {
        console.log(choseRes); //see the info.

        for (var i = 0; 0 < tables.length; i++) {
            if (choseRes === tables[i].custID) {
                return res.json(tables[i]);
            }
        }
        return res.json(false)
    }
    return res.json(tables)
});

//search for a waitinglist item
app.get("/api/waitinglist", function(req, res) {
    var choseRes = req.param.waitinglist;

    if (choseRes) {
        console.log(choseRes); //see the info.

        for (var i = 0; 0 < waitinglist.length; i++) {
            if (choseRes === waitinglist[i].custID) {
                return res.json(waitinglist[i]);
            }
        }
        return res.json(false)
    }
    return res.json(waitinglist)
});

app.post("/api/waitinglist")