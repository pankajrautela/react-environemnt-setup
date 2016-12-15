var React = require('react');
var ReactDOM= require('react-dom');

var SignInBox=require('./../components/SignInBox.jsx');
var LogoHeader=require('./../components/LogoHeader.jsx');
var LogoFooter=require('./../components/LogoFooter.jsx');
var SignInBoxHeader=require('./../components/SignInBoxHeader.jsx');
var NavBar=require('./../components/TopNavigationBar.jsx');
var Resources = require('./../components/developerList.jsx');
var DeveloperStore = require('./../stores/developerstore.jsx');

var DEVELOPERS = DeveloperStore.getDeveloperNames();

function rerender(){
	ReactDOM.render(<Resources developers = {DEVELOPERS} />,app);    
}


DeveloperStore.onChange(()=>{
	DEVELOPERS = DeveloperStore.getDeveloperNames();
    rerender();
    ReactDOM.render(<Resources developers = {DEVELOPERS} />,app);    
})

module.exports = React.createClass({
    render:function(){
    return(         
        <div>
                <div className="row">
                    <div className="logoheader">
                        <LogoHeader pagename = 'mercerinsights' />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <NavBar /> 
                    </div>
                </div>
                <div className="layer"> 
                    <div id = "dev">
                      <Resources developers = {DEVELOPERS} />
                    </div>
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

       
    

