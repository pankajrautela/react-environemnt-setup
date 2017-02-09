var React = require('react');
var AddSurvey=require('./../components/addsurvey.jsx');
var Survey = require('./../containers/surveyResults.jsx');

module.exports = React.createClass({
   render:function(){
       return(
            <div className="layer">   
                <br /><b>Please fill this survey form - </b><br /> <br /> 
                    <AddSurvey />
                    <Survey />
           </div>    
       )
   } 
})

