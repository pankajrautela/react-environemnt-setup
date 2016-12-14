var React = require('react');
var DeveloperElements = require('./../components/developers.jsx');
var AddElement = require('./../components/addElement.jsx');

module.exports = React.createClass({
   render:function(){
       return(
            <div className = "layer">
                 <h4>List of Developers:</h4>       
                        {this.props.developers.map(function(developer,index){
                                return(   
                                       <DeveloperElements developer={developer} key ={"developer"+index} />
                                    )
                                    })    
                        }
                
               <AddElement />
            </div>
       )
   } 
})
