var React = require('react');
var LogoHeader = require('./../components/LogoHeader.jsx');
var LogoFooter = require('./../components/LogoFooter.jsx');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    
      getInitialState: function() {
        return { enabledisable: false,
               access:false};
      },
   
      accessfalse:function(){
        this.setState({access: false,
                      enabledisable: false});  
      },
      accesstrue:function(){
        this.setState({access: true,
                      enabledisable: true});  
      },
    
      render:function(){
       return(
        <div>
            <div className="logoheader">
                <LogoHeader />
            </div>
            <nav className ="nav-collapse.collapse">
                <div className="navbar-inner"> 
                  <ul className="nav navbar-nav navbar-left">
                                               
                            <li className="nav-item">
                            {this.state.enabledisable?
                                <Link  className="nav-link" to="/home">React Project</Link>
                                :null}
                            </li>
                            <li className="nav-item">
                                {this.state.enabledisable?
                                <Link className="nav-link" to="/feedback" >Survey</Link>
                                :null}    
                            </li> 
                            <li className="nav-item">
                                {this.state.enabledisable?
                                <Link className="nav-link" to="/about" >Manage-Team</Link>
                                :null}    
                            </li> 
                            {/*<li className="nav-item">
                                {this.state.enabledisable?
                                <Link className="nav-link" to="/game" >Game-Of-Luck</Link>
                                :null}    
                            </li>  
                            <li className="nav-item">
                                {this.state.enabledisable?
                                <Link className="nav-link" to="/tictac" >Tic-Tac</Link>
                                :null}    
                            </li> */}
                      
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                          {this.state.access?
                          <Link className="nav-link" to="/" onClick={this.accessfalse}>Logout</Link>
                          :<Link className="nav-link" to="/login" onClick={this.accesstrue}>Login</Link>} 
                        </li>
                  </ul>
                </div>
              </nav>
                    
            <div className="navbar-fixed-bottom footer-bottom">           
                <LogoFooter />
            </div>
        </div>
       );
   }
});
