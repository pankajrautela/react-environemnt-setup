var React = require('react');
var SignInBox=require('./../components/SignInBox.jsx');
var LogoHeader=require('./../components/LogoHeader.jsx');
var LogoFooter=require('./../components/LogoFooter.jsx');
var SignInBoxHeader=require('./../components/SignInBoxHeader.jsx');
var NavBar=require('./../components/TopNavigationBar.jsx');
var AddElement = require('./../components/addElement.jsx');


var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
                    
module.exports = React.createClass({
   render:function(){
       return(
           <div>
                <div className="row">
                    <div className="logoheader">
                        <LogoHeader pagename = 'mercerinsights'/>
                    </div>
                </div>
               <div className="row">
                    <div>
                        <NavBar /> 
                    </div>
                </div>
                <div className="layer">
                    
                    <p> Welcome. You are in Project Tracker page now.</p>
                    
                      <b> Please provide your comment here:</b> 
                       <AddElement />
                       
                                        
                       
                </div>                      
                <div className="row">
                    <div className="navbar-fixed-bottom footer-bottom">
                        <LogoFooter />
                    </div>
                </div>
           </div>
		   
       )
   } 
});

