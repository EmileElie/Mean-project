// var http = require('http');
// var salutations = require('salutations');

// var server = http.createServer(function(request, response){
// 	response.end(salutations.salutations());
// });

// server.listen(8888);

var express = require('express');
var app     = express();

app.get('/', function(request, response){
	response.setHeader('Content-Type', 'text/plain');
	response.end('Bonjour de Node.js');
});

app.listen(8888);