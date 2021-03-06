var React = require('react');
var Action = require('./../actions/actioncreator.jsx');

module.exports = React.createClass({
    
    getInitialState:function(){
        return {input:'',
               statusflag:"inactive",
               disabled: true};
    },
    
    componentDidMount: function() {
    this.setState({disabled: false})
    },
    
    handleInputName:function(e){   
        this.setState({input:e.target.value});
        },
        
     addItem:function(e) {
         e.preventDefault();
         Action.add({name:this.state.input,
                    staus:this.state.statusflag});
         this.setState({
             input:''
            })
         },
    
        render:function()
            {
            return(
                <div className = "developer-addItem">
                    <form onSubmit={this.addItem}>
                        <input type = "text" required value={this.state.input} onChange={this.handleInputName} disabled= {this.state.disabled}/>
                        <button> Add </button>
                    </form>
                </div>
                )
            }
    });

