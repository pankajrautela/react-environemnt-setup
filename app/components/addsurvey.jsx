var React = require('react');
var Action = require('./../actions/actioncreator.jsx');

module.exports = React.createClass({
    
    getInitialState:function(){
        return {
            input:'',
            skill:'',
            agree:'',
            comment:''
        };
        },
    
    handleInputName:function(e){   
         this.setState({input:e.target.value});
        },
        handleInputComments:function(e){   
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
         e.preventDefault();
            this.setState({
             input:'',
             skill:'',
            agree:'',
            comment:''
            });
         Action.addSurvey(
             {
                 name:this.state.input,
                 skill:this.state.skill,
                 terms:this.state.agree,
                 comments:this.state.comment
                });
         },
    
        render:function()
            {
                return(
                <div className = "survey">
                    <form onSubmit={this.addSurvey}>
                    <table>
                    <tbody>
                    <tr>
                    <td>Your Name </td>
                    <td><input type = "text" value={this.state.input} onChange={this.handleInputName}/> </td>
                    </tr>
                    <tr>
                    <td>Your Skill </td>
                    <td>
                    <label>
                        <input type = "radio" name="skills" value=".NET" id="net" onChange={this.handleInputnet}/>
                    .NET
                    </label> 
                     <label>
                    <input type = "radio" name="skills" value="Sharepoint" id="sharepoint"  onChange={this.handleInputSharepoint}/>
                     Sharepoint
                     </label>
                      <label> 
                    <input type = "radio" name="skills" value="Microstrategy" id="microstrategy"  onChange={this.handleInputMicrostrategy}/>
                    Microstrategy
                    </label> 
                    </td>
                    </tr>
                    <tr>
                    <td>Are you ready to explore open souce technologies?  </td>
                    <td><input type="checkbox" onChange={this.handleInputTerms} id="termscondition"/> 
                    </td>
                    </tr>
                    <tr>
                    <td>Comments (if any):  </td>
                    <td>
                    <textarea value={this.state.comment} onChange={this.handleInputComments}></textarea> 
                    </td>
                    </tr>
                     <tr>
                     <td></td>
                    <td>
                        <button className="btn-success"> Add Survey</button>
                     </td>
                    </tr>
                    </tbody>
                    </table>
                    </form>
                </div>
                )
            }
    });

