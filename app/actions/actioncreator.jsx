var dispatcher = require('./../dispatcher.js');

module.exports ={
    
    add:function(developer){
        dispatcher.dispatch({
            payload:developer,
            type:"developer-item:add"
        })
    },
    
    
    delete:function(developer){
        dispatcher.dispatch({
            payload:developer,
            type:"developer-item:delete"
        })
    },
    
    inactive:function(developer){
        dispatcher.dispatch({
            payload:developer,
            type:"developer-item:inactive"
        })
    },
    
    active:function(developer){
        dispatcher.dispatch({
            payload:developer,
            type:"developer-item:active"
        })
    }
    
}