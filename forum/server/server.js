var http = require('http');
var colors = require("colors");
var mongo = require("mongoose");

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('Hello World\n');
  console.log('Hi, I got a request'.green);
}).listen(8080);

console.log('Server running at ' + process.env.IP + ":"+ process.env.PORT);

/*
var port = 3000;
var https = require("https");
var fs = require('fs');
var path = require("path");

var options = {
  pfx: fs.readFileSync('./certificate/gotoforum.pfx')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);
console.log(("Server running in https://127.0.0.1:" + port).red);
*/