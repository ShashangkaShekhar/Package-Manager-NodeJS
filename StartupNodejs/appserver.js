'use strict';
var http = require('http');
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 1337;



app.get('/', function (req, res) {
    res.sendFile('views/index.html', { "root": __dirname });
});

app.get('/about', function (req, res) {
    res.sendFile('views/about.html', { "root": __dirname });
});

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(port, function () {
    console.log('Node server is running on port..' + port);
});
