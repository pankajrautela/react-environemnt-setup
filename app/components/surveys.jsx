var React = require('react');

module.exports = React.createClass({
   render:function(){
       console.log("lets render");
       return(
           <div className ="row">
               <div> 
                    <div>
                        <h4>{this.props.survey.name}</h4>  
                    </div>
                </div>
           </div>
           )
   }
})
  