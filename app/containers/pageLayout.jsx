var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var LogoHeader=require('./../components/LogoHeader.jsx');
//var SignInBox = require('./../components/SignInBox.jsx');
//var NavBar=require('./../components/TopNavigationBar.jsx');
var LogoFooter=require('./../components/LogoFooter.jsx');
var Link = ReactRouter.Link;

        
module.exports = React.createClass({
   render:function(){
       return(
           
           <div>
            <div className="container">
            <div className="row">
                <div className="logoheader">
                    <LogoHeader pagename = 'mercerinsights' pagetitle='Mercer Insights' activeUser='true' userName={this.context.routeParams.home}/>
                </div>
            </div>
            </div>
            <div className="layer">
            <div className="main-container">
                Welcome Mate.....
            </div>
            </div>
               <div className="container">
            <div className="row">
                <div className="navbar-fixed-bottom footer-bottom">
                    <LogoFooter />
                </div>
            </div>
            </div>
            </div>
   )} 
});