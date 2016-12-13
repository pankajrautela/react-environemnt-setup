
var dispatcher = require('./../dispatcher.js');


module.exports ={
    
    add:function(item){
        dispatcher.dispatch({
            payload:item,
            type:"developer-item:add"
        })
    },
    
    
    delete:function(item){
        dispatcher.dispatch({
            payload:item,
            type:"developer-item:delete"
        })
    },
    
    inactive:function(item){
        dispatcher.dispatch({
            payload:item,
            type:"developer-item:inactive"
        })
    },
    
    active:function(item){
        dispatcher.dispatch({
            payload:item,
            type:"developer-item:active"
        })
    }
    
}