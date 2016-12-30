var React = require('react');
var SignInBox = require('./SignInBox.jsx');
module.exports = React.createClass({
   render:function(){
       return(
         <form className="form well signInHeader">
               <div>
               Login to Analytical Module
               </div>
            </form>
       )
   } 
});