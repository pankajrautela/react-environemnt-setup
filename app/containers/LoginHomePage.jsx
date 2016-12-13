var React = require('react');
var SignInBoxHeader=require('./../components/SignInBoxHeader.jsx');
var SignInBox=require('./../components/SignInBox.jsx');
var LogoHeader=require('./../components/LogoHeader.jsx');
var LogoFooter=require('./../components/LogoFooter.jsx');

var green = '#FFFFFF';
var yellow = '#FFFAFA';
var name='administrator';

module.exports = React.createClass({
    getInitialState: function () {
            return { color: green,
                   username : ''};
    },
    
    changeColor: function () {
    var color = this.state.color == green ? yellow : green;
    this.setState({ color: color });
    },
    
    render:function(){
        return(
           <div>
               <div className="logoheader" >   
                <LogoHeader pagename = 'mercerinsights' pagetitle='Mercer OS - React Module'/>
               </div>       
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                             <SignInBoxHeader />
                                <div  style={{background: this.state.color}}> 
                                    <div>
                                        
                                        <SignInBox name = {this.props.name}/>
                                        
                                    </div>                 
                                </div>    
                        </div>
                    </div>
                </div>
                <div className="navbar-fixed-bottom footer-bottom">
                    <LogoFooter />
                </div>
            </div>
       );
   }
});

