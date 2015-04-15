/* just adding a comment for desktop checkin */
var http = require('http');
var colors = require("colors");
var mongoose = require("mongoose");
mongoose.connect('mongodb://srajkumarms-my-playground-1392957:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("MongoDB test database is connected...".green);
});


var kittySchema = mongoose.Schema({
    name: String
});
var Cat = mongoose.model('Cat', kittySchema);

var server = http.createServer(function(request, response) {
  console.log('Hi, I got a request'.green);
  var kitty = new Cat({
    name: 'Zildjian'
  });
  kitty.save(function(err) {
    if (err) // ...
      console.log('meow');
  });
  response.writeHead(200, {
    'Content-Type': 'application/json'
  });
  //response.end('<b>Hello World</b>');
  
  Cat.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
    response.end(kittens.toString());
  });
  
});
server.listen(8080);

console.log('Server running at ' + process.env.IP + ":" + process.env.PORT);

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