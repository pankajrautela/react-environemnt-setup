var React = require('react');
var PropTypes = React.PropTypes;

module.exports = React.createClass({
     propTypes: {
        input:PropTypes.string,
        ID:PropTypes.string,
        skill:PropTypes.string,
        agree:PropTypes.string,
        comment:PropTypes.string,
        handleInputName:PropTypes.func,
        handleInputID:PropTypes.func,
        handleInputnet:PropTypes.func,
        handleInputSharepoint:PropTypes.func,
        handleInputMSTR:PropTypes.func,
        handleInputTerms:PropTypes.func,
        handleInputComments:PropTypes.func,
        handleSubmit:PropTypes.func 
    },
    render:function()
            {
            return(  
            <div className = "survey">           
              <form onSubmit={this.props.handleSubmit}>
                <table>
                    <tbody>                        
                        <tr>
                            <td>Your Name : </td>
                            <td><input type = "text" value={this.props.input} required onChange={this.props.handleInputName}/> </td>
                        </tr>
                        <tr>
                            <td>Your Employee ID : </td>
                            <td><input type = "text" value={this.props.ID} required onChange={this.props.handleInputID}/> </td>
                        </tr>
                        
                        <tr>
                            <td>Your Skill : </td>
                            <td>
                                <label>
                                    <input type = "radio" name="skills" value=".NET" id="net"  onChange={this.props.handleInputnet}/>
                                    .NET
                                </label> 
                                <label>
                                    <input type = "radio" name="skills" value="Sharepoint" id="sharepoint"  onChange={this.props.handleInputSharepoint}/>
                                    Sharepoint
                                </label>
                                <label> 
                                    <input type = "radio" name="skills" value="Microstrategy" id="microstrategy"  onChange={this.props.handleInputMSTR}/>
                                    Microstrategy
                                </label> 
                            </td>
                        </tr>
                           
                        <tr>
                            <td>Are you ready to explore open souce technologies? :</td>
                            <td><input type="checkbox" onChange={this.props.handleInputTerms} id="termscondition"/> </td>
                        </tr>
                        <tr>
                            <td>Comments (if any) :  </td>
                            <td>
                                <textarea value={this.props.comment} onChange={this.props.handleInputComments}></textarea> 
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className="btn-success"> Submit Feedback</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
          </div>                    
         )
    }
})
