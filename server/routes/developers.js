module.exports = function(app){
    
    var developerlist = require('./../models/developerlist.js'); 
    //used only by java
        app.route('/api/developers')
            .get(function(req,res){
                developerlist.find(function(error,doc){
                           res.send(doc);
                           })
                })
            .post (function(req,res){
                var newdeveloper = req.body;
                var developerlist = new developerlist(newdeveloper);
                developerlist.save(function(err,doc){
                    if (err) {
				    res.status(501).send();
			         } else {
				    res.status(200).send(doc);
			         }
		          });
	           })
  //another route path
	app.route('/api/developers/:id')
	   .get(function(req,res){
		  developerlist.find({_id:req.params.id},function(error,doc){
			if (error){
				return res.status(404).send();
			}
			res.status(200)
				.send(doc);
		      })
	       })
	   
        .delete(function(req,res){
		  developerlist.findOne({_id:req.params.id})
		  .remove(function(){
		      res.status(202)
			 .send();
		  })
	   })
        
	   .patch(function(req,res){
		  developerlist.findOne({_id:req.body._id},function(err,doc){
			if (!doc){
				return res.status(404).send();
			}
			for (var key in req.body){
				doc[key] = req.body[key];
			}
			doc.save(doc);
			res.status(200).send(doc);
		})

	})
}
