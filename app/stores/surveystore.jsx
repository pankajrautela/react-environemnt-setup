"use strict";
var dispatcher = require("./../dispatcher.js");
var helper = require("./../helpers/RestHelper.js");

function surveyStore(){

    //var developerNames = [];  
    var	changeListeners = [];
    var surveyLists = [];
     //on every trigger get new copy of developers
	function triggerListeners(){
		changeListeners.forEach(function(listener){
			listener(surveyLists);
		})
	}
    
    function onChange(listener){
        changeListeners.push(listener);
	}
   
    function addSurvey(survey){
		surveyLists.push(survey);
		helper.post("api/surveylist",survey);
        triggerListeners();
	}
    
    function getSurveyList(){
		   helper.get("api/surveylist")
        .then(function(data){
            surveyLists = data;
        });
        return surveyLists;
	}         
    
	dispatcher.register(function(event){
		var split = event.type.split(':');
		if (split[0]==='survey'){
			switch(split[1]) {
				case "add":
					addSurvey(event.payload);
					break;
            }
		  }
       	})

	return {
        getSurveyList:getSurveyList,
		onChange:onChange
	}
}

module.exports = new surveyStore();
