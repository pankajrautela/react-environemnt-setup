var React = require('react');
var Action = require('./../actions/actioncreator.jsx');

module.exports = React.createClass({
    
    getInitialState:function(){
            return {input:''};
        },
    
    handleInputName:function(e){   
    this.setState({input:e.target.value});
        },
        
     addItem:function(e) {
         e.preventDefault();
         console.log("Adding item!",this.state.input);
         Action.add({
             name:this.state.input
         });
         this.setState({
             input:''
         })
         },
     
    render:function()
        {
            return(
            <div className = "developer-addItem">
                <form onSubmit={this.addItem}>
                    <input type = "text" required value={this.state.input} onChange={this.handleInputName}/>
                    <button> Add </button>
                </form>
            </div>
            )
            
            
        }
});

