var React = require('react');
var Cell = require('./../components/cell.jsx');

module.exports = React.createClass({
    getInitialState: function() 
    {
        return {
                PLAYER_ONE_SYMBOL: "X",
                PLAYER_TWO_SYMBOL: "O",
                currentTurn: "X",
                board: [
                "","","","","","","","",""
                ]
        }
    },
    handleClick: function(index) {
        console.log("hello:");   
    }
    ,  
   
    
    render: function(){
        return(
            <div className ="board">
                {this.state.board.map(function(cell,index){
                                return(   
                                    <Cell cell={cell} key ={"cell"+index} onClick={this.handleClick}  />
                                    )
                                    })  
                        } 
            </div>
        )
    }
})