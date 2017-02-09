var mongoose = require('mongoose');
//defines  collection name
var developerlist = require('./models/developerlist.js'); 
var surveylist = require('./models/surveylist.js'); 

//defines server/db name
mongoose.connect('mongodb://localhost/developer',function(){
    
     //flush existing data
   mongoose.connection.db.dropDatabase();
 developerlist.find(function(error,doc){
    if(doc.length < 1)
    {
        var developerNames = [
                        {name:"pankaj rautela",status:"inactive",working:true},
                        {name:"indu",status:"inactive",working:false}
                        ];  
            //loads new data everytime..
            developerNames.forEach(function(developer){
                new developerlist(developer).save();        
            })
    }
});

    
    console.log("MongoDB Ready");
})

