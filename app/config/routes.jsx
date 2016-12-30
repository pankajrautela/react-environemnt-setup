var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('./../components/main.jsx');
var LoginHome = require('./../containers/LoginHomePage.jsx');
var Home = require('./../containers/HomePage.jsx');
var GuestHome = require('./../containers/guestHome.jsx');
var Feedback = require('./../containers/projectFeedback.jsx');
var Tracker = require('./../containers/projectTracker.jsx');
var About = require('./../containers/aboutUS.jsx');
var Welcome = require('./../containers/welcome.jsx');
var SurveyData = require('./../containers/surveyResults.jsx');
var Game = require('./../containers/gameOfLuck.jsx');

var routes = (
    <Router history = {hashHistory}>
        <Route path = '/' component={Main}>
            <IndexRoute component ={Welcome} />
            <Route path='login' header ="login" component ={LoginHome} /> 
            <Route path='home' header ="home" component ={Home} /> 
            <Route path='guest' header ="guesthome" component ={GuestHome} /> 
            <Route path='feedback' header ="feedback" component ={Feedback} /> 
            <Route path='tracker' header ="tracker" component ={Tracker} /> 
            <Route path='about' header ="about" component ={About} /> 
            <Route path='surveydata' header ="surveydata" component ={SurveyData} />
            <Route path='game' header ="game" component ={Game} />
 
        </Route>
    </Router>
);

module.exports = routes;