var React = require('react');
var ReactDOM = require('react-dom');
var Resources = require('./../components/developerList.jsx');
var DeveloperStore = require('./../stores/developerstore.jsx');
var AddElement = require('./../components/addElement.jsx');

var DEVELOPERS = DeveloperStore.getDeveloperNames();
DeveloperStore.onChange(function(DEVELOPERS){ 
    console.log("change request received");
    rerender();
    })

function rerender(){    
    DEVELOPERS=DeveloperStore.getDeveloperNames();
    ReactDOM.render(<Resources developers = {DEVELOPERS} />,dev); 
}

module.exports = React.createClass({
    render:function(){
        return(
            <div><h3>List of Developers:</h3>  
            <AddElement />
            <div id="dev"  style={{overflow: 'auto', maxHeight: 400}}>            
              <Resources developers = {DEVELOPERS} />
            </div>
            </div>    
       );
   } 
})