module.exports = function(app){
    
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
    //used only by java
 app.route('/api/developers')
 .get(function(req,res){
     res.send(developerNames);
 })
} 
// this could will make the changes persist till we restart webserver.

