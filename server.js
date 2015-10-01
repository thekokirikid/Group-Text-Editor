var express = require('express');
var app = express();

//for images and static public pages
app.use(express.static('public'));

app.get('/chat', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});

var server = app.listen(8080, function () {
  console.log("app info: "+JSON.stringify(server.address()));
});
