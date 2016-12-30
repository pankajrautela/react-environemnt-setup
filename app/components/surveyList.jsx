var React = require('react');
var SurveyElements = require('./../components/surveys.jsx');

module.exports = React.createClass({
    
   render:function(){
       return(
            <div className = "layer">
               <h4>List of all received Feedbacks:</h4>       
                        {this.props.surveys.map(function(survey,index){
                                return(<SurveyElements survey={survey} key ={"survey"+index} />)
                                    })  
                        }   
            </div>
       )
   } 
})