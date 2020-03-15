const express = require("express");
const app = express(); 
var stringArray = new Array("one", "two", "three", "four");


app.use(express.static('public'));
//frontpage
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

//javascript section
app.get("/javascript", (req, res) => {
    res.sendFile(__dirname + '/public/javascript.html');
});
app.get("/javascript/1", (req, res) => {
    res.sendFile(__dirname + '/public/javascript-1.html');
});
app.get("/javascript/2", (req, res) => {
    res.sendFile(__dirname + '/public/javascript-2.html');
});
app.get("/javascript/3", (req, res) => {
    res.sendFile(__dirname + '/public/javascript-3.html');
});
app.get("/javascript/4", (req, res) => {
    res.sendFile(__dirname + '/public/javascript-4.html');
});
app.get("/javascript/5", (req, res) => {
    res.sendFile(__dirname + '/public/javascript-5.html');
});

//jquery section
app.get("/jquery", (req, res) => {
    res.sendFile(__dirname + '/public/jquery.html');
});

//node.js section
app.get("/node", (req, res) => {
    res.sendFile(__dirname + '/public/node.html');
});
app.get("/node/1", (req, res) => {
    res.sendFile(__dirname + '/public/node-1.html');
});
app.get("/node/2", (req, res) => {
    res.sendFile(__dirname + '/public/node-2.html');
});

//express section
app.get("/express", (req, res) => {
    res.sendFile(__dirname + '/public/express.html');
});
app.get("/express/1", (req, res) => {
    res.sendFile(__dirname + '/public/express-1.html');
});
app.get("/express/2", (req, res) => {
    res.sendFile(__dirname + '/public/express-2.html');
});

app.listen(3000, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 3000);
});