var React = require('react');
var DeveloperElements = require('./../components/developers.jsx');


module.exports = React.createClass({
    
   render:function(){
       return(
            <div className = "layer">     
                        {this.props.developers.map(function(developer,index){
                                return(   
                                       <DeveloperElements developer={developer} key ={"developer"+index} />
                                    )
                                    })  
                        } 
            </div>
       )
   } 
})
