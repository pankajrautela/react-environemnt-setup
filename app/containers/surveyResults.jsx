var React = require('react');
var ReactDOM = require('react-dom');
//var Fetch = require('./../components/levelUp.jsx');
var SurveyList = require('./../components/surveyList.jsx');
var SurveyStore = require('./../stores/surveystore.jsx');

var SurveyData = SurveyStore.getSurveyList();

SurveyStore.onChange(function(SurveyData){ 
    rerendersurvey();
    })

function rerendersurvey(){    
    SurveyData=SurveyStore.getSurveyList();
    console.log("New data received!!");
}

module.exports = React.createClass({
    render:function(){
        return(
            <div id="sur">
              <SurveyList  surveys={SurveyData} />
            </div>
       )
   } 
})