var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var topNavigationBar = React.createClass({
    render:function(){
       return(
        <div>
			  <nav className ="nav-collapse.collapse">
                <div className="navbar-inner">
                  <ul className="nav navbar-nav navbar-left">
                        <li className="nav-item">
                            <Link  className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/feedback">Project-Feedback</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tracker">Project-Tracker</Link>
                        </li>           
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About-Us</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Logout</Link>
                        </li>
                  </ul>
                </div>
              </nav>  
        </div>
        )
   } 
});

module.exports =topNavigationBar;

    