var dispatcher = require("./../dispatcher.js");
var helper = require("./../helpers/RestHelper.js");

function DeveloperStore(){

    var developerNames = [];  
    var	changeListeners = [];
    var flag = true;
    //on every trigger get new copy of developers
	function triggerListeners(){
		changeListeners.forEach(function(listener){
			listener(developerNames);
		})
	}
    
    helper.get("api/developers")
        .then(function(data){
            developerNames = data;
            triggerListeners();
        });
        
    //get all items first
    function getDeveloperNames(){
        changeRequest();
        return developerNames;
        
	}
    
    function changeRequest(){
        return flag;
    }
        
    function onChange(listener){
        changeListeners.push(listener);
	}
   
	function addDeveloperName(developer){
		developerNames.push(developer);
		helper.post("api/developers",developer);
        triggerListeners();
	}
             
    function deleteDeveloperName(developer){
        var index;
        developerNames.filter(function(_developer,_index){
            if(_developer.name == developer.name)
            {index = _index;}
        })
        developerNames.splice(index,1);
        helper.del("api/developers/"+developer._id);
        triggerListeners();        
    };
    
    function setDeveloperWorkingStatus(developer, working){
        var _developer= developerNames.filter(function(a){return a.name == developer.name})[0];
        developer.working = working ||false;
        helper.patch("api/developers/"+developer._id,developer);
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
		onChange:onChange,
        changeRequest:changeRequest
	}
}

module.exports = new DeveloperStore();
