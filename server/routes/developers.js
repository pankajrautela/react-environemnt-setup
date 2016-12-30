module.exports = function(app){
    var DeveloperModel = require('./../models/developerlist.js'); 
    
    app.route('/api/developers')
            .get(function(req,res){
                DeveloperModel.find(function(error,doc){
                           res.send(doc);
                          });
                })
        
            .post(function(req,res){
                //get the payload
                var newElement = req.body;    
                var developerList = new DeveloperModel(newElement);
                //developerList.push(newElement);    
                developerList.save(function(err,doc){
                    res.status(300).send(doc);
                    //if (err) {
				    //res.status(501).send();
			         //} else{
                    //res.status(200).send(doc);
                    //return   res.send(req.body);
                    //console.log("post done");
			         //}
		          })
	           });
    
  //another route path
	       app.route('/api/developers/:id')
	           .get(function(req,res){
		          DeveloperModel.find({_id:req.params.id},function(error,doc){
			     if (error){
				    return res.status(404).send();
			     }
			     res.status(200).send(doc);
		          });
	           })
    
        .delete(function(req,res){
		  DeveloperModel.findOne({_id:req.params.id},
                                function(err,doc){
			if (!doc){
				return res.status(404).send();
			}
          })
		  .remove(function(){
		      res.status(202).send();
		  });
	   })
    
	   .patch(function(req,res){
		  DeveloperModel.findOne({
              _id:req.body._id
          },function(err,doc){
			if (!doc){
				return res.status(404).send();
			}
			for (var key in req.body){
				doc[key] = req.body[key];
			};
			doc.save();
			res.status(200).send(doc);
		});
	})
}
