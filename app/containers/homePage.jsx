var React = require('react');
//var SignInBox=require('./../components/SignInBox.jsx');
//var LogoHeader=require('./../components/LogoHeader.jsx');
//var LogoFooter=require('./../components/LogoFooter.jsx');
//var SignInBoxHeader=require('./../components/SignInBoxHeader.jsx');
//var NavBar=require('./../components/TopNavigationBar.jsx');
//var Menu = require('./../components/navigationmenu.jsx');
//<Menu items={ ['Home', 'Services', 'About', 'Contact us'] } />

module.exports = React.createClass({
   render:function(){
       return(
                <div className="layer">
                    <br/>
                    <i>Welcome</i>,
                    <br/>
                    This react projects is just an excersie run to learn various aspects of React JS.
                    It can be viewed as ready made boilerplate for quick react project development. 
                   <br/>

                   <br/>
                   It uses following configurations:<br/>

                   <b>1. Server Side:</b> NodeJS<br/>
                   <b>2. Web Server:</b>  ExpressJS<br/>
                   <b>3. Task Management:</b> Gulp<br/>
                   <b>4. Backend:</b> Mongoose connecting to MongoDB<br/>
                   <b>5. Front End:</b> ReactJS<br/>

                   <br/>

                   <br/>
                   If you wish the access the code base please checkout the following code base:
                   <div>
                     <a target="_blank" href={'https://github.com/pankajrautela/react-environemnt-setup.git'}>"Download React Source Code"</a>
                    </div> 
                <div>
                <form className="addForm">
                    <input type="hidden" name="id" ref="id" />
                    <input type="text" name="name" placeholder="Name" ref="name" />
                    <input type="text" name="position" placeholder="Position" ref="position" />
                    <input type="email" name="email" placeholder="E-mail" ref="email" />
                    <input type="submit" value="Add" ref="submit" className="small button" />
                </form>
                    
                </div>
                </div>
       )
   } 
});

