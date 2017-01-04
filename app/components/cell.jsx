var React = require('react');

module.exports = React.createClass({
     
     render: function(){
        return(
            <div key={this.props.index} className ="square" onClick = {this.props.onClick(this.props.index)}>
                {this.props.cell}
            </div>
            )
     }
})