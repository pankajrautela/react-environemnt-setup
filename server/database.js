var mongoose = require('mongoose');
//defines  collection name
var developerlist = require('./models/developerlist.js'); 

//defines server/db name

mongoose.connect('mongodb://localhost/developer',function(){
    console.log("MongoDB connected");
    //flush existing data
    mongoose.connection.db.dropDatabase();
    console.log("developerlists truncated");
    var developerNames = [
                {name:"pankaj rautela",
                   status:"inactive",
                  working:true},
                  {name:"prince",
                   status:"inactive",
                  working:false},
                  {name:"neha",
                   status:"inactive",
                  working:false },
                  {name:"nisha",
                   status:"inactive",
                  working:false },
                  {name:"ritu",
                   status:"inactive",
                  working:false },
                  {name:"guru",
                  status: "inactive",
                  working:false},
                  {name:"Others",
                  status:"does not exist",
                  working:false}
                ];  
    //loads new data everytime..
    developerNames.forEach(function(developer){
        new developerlist(developer).save();        
    })
    console.log("developerlists populated with base data")
})