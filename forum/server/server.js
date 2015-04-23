var admin = require('./modules/admin');
var express = require('express');
/* Main module */
var app = express();

/* Initialize Admin module */
app.use('/admin', admin);

/* Create virtual directories for our client content folders */
app.use('/v', express.static('../client/views'));
app.use('/s', express.static('../client/scripts'));
app.use('/c', express.static('../client/styles'));
app.use('/f', express.static('../client/fonts'));

/* Initialize server and listen for requests */
var server = app.listen(process.env.PORT, function () {

  var host = process.env.IP;
  var port = process.env.PORT;

  console.log('Example app listening at http://%s:%s', host, port);

});

app.get('/', function(request, response) {
  response.redirect('/v/index.html#/');
});
