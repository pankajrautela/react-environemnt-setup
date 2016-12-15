var mongoose = require('mongoose');
//defines  collection name
var developerlist = require('./models/developerlist.js'); 

//defines server/db name

mongoose.connect('mongodb://localhost/developer',function(){
    
    //flush existing data
   //mongoose.connection.db.dropDatabase();
    var developerNames = [
                {name:"pankaj rautela",status:"inactive",working:true},
                {name:"prince",status:"inactive",working:false}
                //{name:"Others",status:"does not exist",working:false}
                ];  
    //loads new data everytime..
    developerNames.forEach(function(developer){
        new developerlist(developer).save();        
    })
    console.log("MongoDB Ready");
})