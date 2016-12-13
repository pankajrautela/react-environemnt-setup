var React = require('react');
var PropTypes = React.PropTypes;

var Prompt= React.createClass({ 
    propTypes: {
        name:PropTypes.string.isRequired,
        onUpdateUser:PropTypes.func.isRequired,
        onUpdatePassword:PropTypes.func.isRequired,
        onSubmitUser:PropTypes.func.isRequired,
        onGuestUser:PropTypes.func.isRequired,
        onForgotPassword:PropTypes.func.isRequired
    },    
    render:function(){
        return(
                <div className = "form-group">
                <div className ="form-group">
                    <form onSubmit = {this.props.handleSubmitUser}>
                        <div className="form-group">
                                <input className ="form-control"
                                placeholder="Provide user name"
                                onChange={this.props.onUpdateUser}
                                value={this.props.name}                                      
                                type = "text" />
                        </div>
                        <div className="form-group">
                                <input className ="form-control"
                                placeholder="Provide password"
                                onChange={this.props.onUpdatePassword}
                                value={this.props.password}
                                type = "password" />
                        </div>
                        <div className="form-group">
                                <button 
                                    className="btn btn-block btn-success"
                                    onClick = {this.props.onSubmitUser} 
                                    type="submit">
                                    Login
                                </button>
                        </div>
                        <div className="form-group">
                                <button 
                                    className="btn btn-block btn-failure"
                                    onClick = {this.props.onGuestUser} 
                                    type="submit">
                                    Login As Guest
                                </button>
                        </div>
                        <div className="form-group">
                                <button 
                                    className="btn btn-block btn-failure"
                                    onClick = {this.props.onForgotPassword} 
                                    type="submit">
                                    Forgot Password?
                                </button>
                        </div>    
                        
                  </form>
                </div>
            </div>
        )
    }
});

module.exports = Prompt;