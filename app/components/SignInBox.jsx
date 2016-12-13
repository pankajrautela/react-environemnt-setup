var React = require('react');
var Prompt =  require('../components/userprompt.jsx');
var fiftyFifty = Math.random() < 0.5;

 var SignInBox= React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired  
    },
     
    getInitialState:function(){
      return {
          name:'',
          password:''
      }  
    },
     
     onUpdateUser: function(e){
         this.setState({
          name:e.target.value  
      })  
    },
     
     onUpdatePassword: function(e){
         this.setState({
          password:e.target.value          
      })  
    },
     
      onSubmitUser: function(e){
      e.preventDefault();  
        var name =  this.state.name;
        var password = this.state.password;
          if (name == password){
        this.context.router.push
        ({
            pathname: '/home/',
            state:
            {
                name: this.state.name
            }
        })
          } else {alert("Please provide the correct credentials!!");
                }
    },
     
     onGuestUser: function(e){
      e.preventDefault();  
        this.context.router.push
        ({
            pathname: '/guest/'
        })
    },
      onForgotPassword: function(e){
      e.preventDefault();  
        alert("We will provide you new password. Don''t worry!!. Please reach out to administrator on below ext: 8922363");
    },
        
    render:function(){
               return(
                <Prompt name = {this.state.name}
                onUpdateUser= {this.onUpdateUser}
                onUpdatePassword= {this.onUpdatePassword}    
                onSubmitUser = {this.onSubmitUser}
                onGuestUser = {this.onGuestUser}
                onForgotPassword = {this.onForgotPassword}
                />
          )
    }
});

module.exports = SignInBox;