var React = require('react');

var Button = React.createClass({                          
    localHandleClick: function(){
      this.props.localHandleClick(this.props.increment);  
    },
    
    render:function(){
        return (
            <div>
              <button onClick = {this.localHandleClick}>
                  {this.props.increment}</button>
            </div>
        )
    }
});

var Result = React.createClass({
    render:function(){
        return (
            <div>
              {this.props.localCounter}
            </div>
        )
    }
})

module.exports = React.createClass({
    getInitialState: function(){
    return {counter:0};
    },
    
    handleClick: function(increment){
        this.setState({counter:this.state.counter+increment});
    },
    render:function(){
        return(
        <div>
            <Button localHandleClick = {this.handleClick} increment={1}/> 
            <Button localHandleClick = {this.handleClick} increment={5}/>     
                <Result localCounter= {this.state.counter}/>
        </div>
        )
    }
})


