//setup webserver
var express = require('express');
var React = require('react');
var developerlist = require('./models/developerlist.js'); 
var app = new express();
var parser = require('body-parser');
//require('babel/register');
require ('./database.js');

//render home page
app.get('/', function(req,res){
    res.render('./../app/index.ejs',{});
    //to load quick template on load this will go to ejs <%- reactOutput %>
    //var application = React.createFactory(require('./../app/containers/welcome.jsx'));
    //developerlist.find(function(error,doc){
    //var generated = React.renderToString(application({
//				developers:doc
//			}));
//			res.render('./../app/index.ejs',{reactOutput:generated});
//		})
        
    })
//location of resources to render home page
.use(express.static(__dirname + '/../temp'))
.listen(7777);
app.use(parser.json());
// help us to handle post request; extended will immune us for compatibility
app.use(parser.urlencoded({extended: false}));

require('./routes/developers.js')(app);
                   