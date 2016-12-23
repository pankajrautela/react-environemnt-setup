var React =require('react');
require('./../containers/aboutUS.jsx');
var NavBar = require('./../components/TopNavigationBar.jsx');
var Main = React.createClass({
    render:function(){
        return(
                <div>
                    <div className = 'main-container'> 
                        {this.props.children}        
                    </div>
                </div>            
                )
            }
    });

module.exports =Main;