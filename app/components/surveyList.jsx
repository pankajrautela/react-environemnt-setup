var React = require('react');
var SurveyElements = require('./../components/surveys.jsx');

module.exports = React.createClass({
    
   render:function(){
       return(
            <div className = "survey-right"  style={{overflow: 'auto', maxHeight: 600}}>
               <h4>List of all received Feedbacks:</h4>       
                        {this.props.surveys.map(function(survey,index){
                                return(<SurveyElements survey={survey} key ={"survey"+index} />)
                                    })  
                        }   
            </div>
       )
   } 
})