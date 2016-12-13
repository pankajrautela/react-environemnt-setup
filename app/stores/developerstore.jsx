"use strict";
var dispatcher = require("./../dispatcher.js");
var helper = require("./../helpers/RestHelper.js");

function DeveloperStore(){

    var developerNames = [];  
    
    helper.get("api/developers")
    .then(function(data){
        developerNames = data;
        triggerListeners();
    })

    var	changeListeners = [];
    
    //get all items first
    function getDeveloperNames(){
		return developerNames;
	}

    function onChange(listener){
        changeListeners.push(listener);
	}
    
    //on every trigger get new copy of developers
	function triggerListeners(){
		changeListeners.forEach(function(listener){
			listener(developers);
		})
	}
    
	function addDeveloperName(developer){
		developerNames.push(developer);
		triggerListeners();
	}
    
    function deleteDeveloperName(developer){
        var index;
        developerNames.filter(function(_developer,_index){
            if(_developer.name == developer.name)
            {index = _index;}
        })
        developerNames.splice(index,1);
        triggerListeners();
    }
    
    function setDeveloperWorkingStatus(developer, status){
        var _developer= developerNames.filter(function(a){return a.name == developer.name})[0];
        developer.working = status ||false;
        triggerListeners();
    }

	dispatcher.register(function(event){
		var split = event.type.split(':');
		if (split[0]==='developer-item'){
			switch(split[1]) {
				case "add":
					addDeveloperName(event.payload);
					break;
                case "delete":
					deleteDeveloperName(event.payload);
					break;    
                case "active":
					setDeveloperWorkingStatus(event.payload,true);
					break; 
                case "inactive":
					setDeveloperWorkingStatus(event.payload,false);
					break;     
			}
		}
	})

	return {
		getDeveloperNames:getDeveloperNames,
		onChange:onChange
	}
}

module.exports = new DeveloperStore();
