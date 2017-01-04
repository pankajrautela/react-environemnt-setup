var React = require('react');
var Action = require('./../actions/actioncreator.jsx');

module.exports = React.createClass({
                  
    toggleStatus:function(e){
        e.preventDefault();
        if (this.props.developer.working){
        Action.inactive(this.props.developer);
        }
        else
        {
        Action.active(this.props.developer)
        }
    },
    
    delete:function(e){
        e.preventDefault();
        const result = window.confirm(`Do you want to delete the ${this.props.developer.name}?`)
    if (result) {
      Action.delete(this.props.developer);
    }    
    },
    
   render:function(){
       return(
            <div>
               <div className ="document-item row">
                    <div className = "six columns">
                    <h4 className = {this.props.developer.working ?"" :"strikethrough"}>{this.props.developer.name}</h4>
                    </div> 
                    <form className = "three columns" onSubmit = {this.toggleStatus}>
                        <button className={this.props.developer.working ? "": "button-primary" }>{this.props.developer.working ?"Make Inactive":"Make Active"}</button>
                    </form>
                    <form className = "three columns"  onSubmit = {this.delete}><button>&times;</button></form>
                </div>
            </div>
       );
   } 
})
