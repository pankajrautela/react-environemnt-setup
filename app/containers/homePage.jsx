var React = require('react');
var SignInBox=require('./../components/SignInBox.jsx');
var LogoHeader=require('./../components/LogoHeader.jsx');
var LogoFooter=require('./../components/LogoFooter.jsx');
var SignInBoxHeader=require('./../components/SignInBoxHeader.jsx');
var NavBar=require('./../components/TopNavigationBar.jsx');
var Menu = require('./../components/navigationmenu.jsx');

module.exports = React.createClass({
   render:function(){
       return(
           <div>
                <div className="logoheader">
                    <LogoHeader pagename = 'mercerinsights' pagetitle='Mercer Insights' activeUser='true' userName='Guest'/>   
                </div>
                 <div className="row">
                    <div>
                        <NavBar /> 
                    </div>
                </div>
                <div className="layer">
                Welcome. You are in Home page now.
                     <Menu items={ ['Home', 'Services', 'About', 'Contact us'] } />
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

