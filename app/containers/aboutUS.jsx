var React = require('react');
var SignInBox=require('./../components/SignInBox.jsx');
var LogoHeader=require('./../components/LogoHeader.jsx');
var LogoFooter=require('./../components/LogoFooter.jsx');
var SignInBoxHeader=require('./../components/SignInBoxHeader.jsx');
var NavBar=require('./../components/TopNavigationBar.jsx');
var Resources = require('./../components/developerList.jsx');
var DeveloperStore = require('./../stores/developerstore.jsx');

var DEVELOPERS = DeveloperStore.getDeveloperNames();

var GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

module.exports = React.createClass({
    
  getInitialState: function () {
    return { currentGP: 0 };
  },

  nextGP: function () {
    var current = this.state.currentGP;
    var next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  },

  interval: null,
  
  componentDidMount: function () {
    this.interval = setInterval(this.nextGP, 5000);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },
    
   render:function(){
    var src = GUINEAPATHS[this.state.currentGP];
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
                    
                        <img src={src} />
                </div>     
                <div>
                      <Resources developers = {DEVELOPERS} />
                    <div className="row">       
                        <div className="navbar-fixed-bottom footer-bottom">
                            <LogoFooter />
                        </div>
                    </div>
                </div>  
        </div>
       )
   } 
});

       
    

