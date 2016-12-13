var React = require('react');
var LogoHeader = require('./../components/LogoHeader.jsx');
var DropDown = require('./../components/realtimesearch.jsx');
var LogoFooter = require('./../components/LogoFooter.jsx');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];
module.exports = React.createClass({
    info: function(){
        alert("WIP Bro!!, tool is not ready yet.");
    },
     render:function(){
       return(
        <div>
            <div className="logoheader">
                <LogoHeader pagename = 'mercerinsights' pagetitle='Mercer OS - React Module'/>
            </div> 
            <div className = "layer">
                <div className = "col-sm-6">
                Mean Technologies - 
                <DropDown items={ libraries } />
                </div>
            </div>        
            <div>
                <ul className="nav navbar-nav navbar-left">
                        <li className="nav-item">
                            <b><Link  className="nav-link" to="/login">React Projects</Link></b>
                        </li>
                        <li className="nav-item">
                            <b>||</b>
                        </li>
                    
                        <li className="nav-item" onClick = {this.info}>
                            <b><Link className="nav-link" to="/">Survey Tool</Link></b>
                        </li>
                        <li className="nav-item">
                            <b>||</b>
                        </li>
                        <li className="nav-item" onClick = {this.info}>
                            <b><Link className="nav-link" to="/">Analytics</Link></b>
                        </li>           
                </ul>
            </div>   
            <div className="navbar-fixed-bottom footer-bottom">           
                <LogoFooter />
            </div>
        </div>
       );
   }
});
