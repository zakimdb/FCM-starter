var express = require("express");
var bodyParser = require("body-parser");
var app     = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // true for parsing application/x-www-form-urlencoded

app.get('/',function(req,res){
  res.sendFile('index.html');
});

app.listen(3000);

console.log("Running at Port 3000");