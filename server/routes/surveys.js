module.exports = function(app){
    var SurveyModel = require('./../models/surveylist.js'); 
    //used only by java
        app.route('/api/surveylist')
            .get(function(req,res){
                SurveyModel.find(function(error,doc){
                           res.send(doc);
                          });
                })
			.post(function(req,res){
                var newElement = req.body;    
                var surveyList = new SurveyModel(newElement);
                surveyList.save(function(err,doc){
                    res.status(300).send(doc);
		          });
	           })
}
