var React =require('react');
var MasterPane = require('./../components/masterPane.jsx');

var Main = React.createClass({
    render:function(){
        return(
                <div>
                <MasterPane /> 
                    <div className = 'main-container'> 
                        {this.props.children}        
                    </div>
                </div>            
                )
            }
    });

module.exports =Main;