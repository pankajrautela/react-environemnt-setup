var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var LogoHeader=require('./../components/LogoHeader.jsx');
var SignInBox = require('./../components/SignInBox.jsx');
var NavBar=require('./../components/TopNavigationBar.jsx');
var LogoFooter=require('./../components/LogoFooter.jsx');
var Link = ReactRouter.Link;

module.exports = React.createClass({
       render:function(){
         return(
         <div>
               <div className="logoheader">
                    <LogoHeader pagename = 'mercerinsights' pagetitle='Mercer Insights' activeUser='true' userName='Guest'/>   
                </div>
                 <div className="row">
                    <div className="layer">
                        <NavBar /> 
                    </div>
                </div>
                <div className="row">
                Welcome. You are in Guest page now.
                </div>
               <div className="row">
                    <div className="navbar-fixed-bottom footer-bottom">
                        <LogoFooter />
                    </div>
                </div>
        </div>
   )} 
});