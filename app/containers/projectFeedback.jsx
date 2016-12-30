var React = require('react');
var AddSurvey=require('./../components/addsurvey.jsx');
var Survey = require('./../containers/surveyResults.jsx');

module.exports = React.createClass({
   render:function(){
       return(
            <div className="layer" style={{overflow: 'auto', maxHeight: 600}}>   
                <br /><b>Please fill this survey form - </b><br /> <br /> 
                    <AddSurvey />
                <div className="layer">
                    <Survey />
                </div> 
           </div>    
       )
   } 
})

