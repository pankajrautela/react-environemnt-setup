var React = require('react');

var Action = require('./../actions/actioncreator.jsx');
var SurveyForm = require('./../components/surveyForm.jsx');

module.exports = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired  
    },
    
    getInitialState:function(){
        return {
            input:'',
            ID:'',
            skill:'',
            lob:'',
            agree:'',
            comment:''
        }
        },
    handleLobOnChange:function(e){
            e.preventDefault(); 
          this.setState({lob:e.newValue});
    },
        handleInputName:function(e){  
         e.preventDefault(); 
         this.setState({input:e.target.value});
        },
        handleInputID:function(e){   
         e.preventDefault(); 
            this.setState({ID:e.target.value});
        },
        handleInputComments:function(e){   
          e.preventDefault(); 
            this.setState({comment:e.target.value});
        },
        handleInputTerms:function(e){   
        
            this.setState({agree:document.getElementById('termscondition').checked});
        },
        handleInputnet:function(e){   
        
            this.setState({skill:document.getElementById('net').value});
        },
        handleInputSharepoint:function(e){   
      
            this.setState({skill:document.getElementById('sharepoint').value});
        },
        handleInputMicrostrategy:function(e){   
      
            this.setState({skill:document.getElementById('microstrategy').value});
        },
     
        addSurvey:function(e) {
         Action.addSurvey(
             {
                 name:this.state.input,
                 ID:this.state.ID,
                 skill:this.state.skill,
                 lob:this.state.lob,
                 terms:this.state.agree,
                 comments:this.state.comment
                })                 
         this.context.router.push
        ({
            pathname: '/surveydata'
        })
        },
    
        render:function(){
               return(   
                <SurveyForm 
                name = {this.state.input}
                ID ={this.state.ID}
                skill ={this.state.skill}
                lob ={'0'}
                handleLobOnChange={this.handleLobOnChange}
                terms ={this.state.agree}
                comments ={this.state.comment}    
                handleInputName = {this.handleInputName}
                handleInputID= {this.handleInputID}
                handleInputComments= {this.handleInputComments}    
                handleInputTerms = {this.handleInputTerms}
                handleInputnet = {this.handleInputnet}
                handleInputSharepoint = {this.handleInputSharepoint}
                handleInputMSTR = {this.handleInputMicrostrategy}
                handleSubmit = {this.addSurvey}    
                />
                )
            }
        })

