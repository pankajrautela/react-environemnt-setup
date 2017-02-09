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
var backend = [
    {
       name: 'mongodb', url: 'https://docs.mongodb.com/manual/'
    }
];

module.exports = React.createClass({
    info: function(){
        alert("WIP Bro!!, tool is not ready yet.");
    },
    getInitialState: function() {
        return { showResults: false };
    },
    ShowPanel:function(e){
   this.setState({ showResults:!this.state.showResults });
    },
     render:function(){
       return(
        <div>
            {/*<input type="button" className="panelButton" value="Show/Hide" onClick={this.ShowPanel} />*/}
            <div className="content">        
                <div className="home-box">
                <Link  to="/">React Projects</Link>
                </div>
                <div className="home-box">
                <Link to="/">Survey Tool</Link>
                </div>
                <div className="home-box">
                <Link to="/">Analytics</Link>
                </div>
            </div> 
             { this.state.showResults ? 
            <div className = "layer">
                <div id="content-slide" className = "slide">
                <h4>Mean Frontend Technologies -</h4> 
                <DropDown items={ libraries } />
                <h4>Mean Backend Technologies -</h4>     
                <DropDown items={ backend} /> 
                </div>
            </div>
     : null }
          
            <div className="navbar-fixed-bottom footer-bottom">           
                <LogoFooter />
            </div>
        </div>
       );
   }
});
