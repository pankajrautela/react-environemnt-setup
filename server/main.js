//setup webserver
var express = require('express');
var app = new express();
var parser = require('body-parser');
require ('./database.js');

//render home page
app.get('/', function(req,res){
    res.render('./../app/index.ejs',{});
})
//location of resources to render home page
.use(express.static(__dirname + '/../temp'))
.listen(7777);
app.use(parser.json());
// help us to handle post request; extended will immune us for compatibility
app.use(parser.urlencoded({extended: false}));

require('./routes/developers.js')(app);
                   