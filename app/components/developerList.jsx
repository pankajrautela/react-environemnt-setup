var React = require('react');
var Developer = require('./../components/developers.jsx');
var AddElement = require('./../components/addElement.jsx');

module.exports = React.createClass({
   render:function(){
       return(
             <div>
                <form className="form well signInHeader">
                    <div>
                        List Of Developers:
                    </div>
                </form>
                    <AddElement />
        
                                {this.props.developers.map(function(developer,index){
                                return(
                                       <Developer developer={developer} key ={"developer"+index} />
                                        )
                                    })    
                                }
             <b>...................................................</b>  
               <p>Some of our React Developers are missing from long time.</p>
                    <b>Status:</b>
                    <p><i>"Still Missing"</i></p>
                    <b>Last Searched:</b> 
                    <p>{new Date().toLocaleTimeString()}</p>  
                    <b>Last captured pics:</b>
            </div>
       );
   } 
});
