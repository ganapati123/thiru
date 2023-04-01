//Routings.js  -->root component
import React from 'react'

//import BrowserRouter
import {Switch,Route, BrowserRouter, Redirect} from 'react-router-dom'

//import Header section
import Header from './MainMenu/Header.js'

//import Footer section
import Footer from './MainMenu/Footer.js'

//import Functional component into Routings
import Home from './MainMenu/Home.js'
import About from './MainMenu/About.js'
import Services from './MainMenu/Services.js'
import Contact from './MainMenu/Contact.js'
import Itservices from './MainMenu/Itservices.js'
import Pagenotfound from './Pagenotfound.js'

//import class components
import Myclass  from './Myclass.js'
import Lifecycle from './MainMenu/Lifecycle.js'
import Restapi from './MainMenu/Restapi.js'
import View from './MainMenu/RESTAPI/View.js'
import Edit from './MainMenu/RESTAPI/Edit.js'
import ReactBootstrap from './MainMenu/ReactBootstrap.js'
import Signup from './MainMenu/Signup.js'
import ReactReduxConnection from './MainMenu/ReactReduxConnection.js' 

//React Hooks
import RHuseStateHooks from './MainMenu/useStateHooks.js'
import RHuseEffectHooks from './MainMenu/useEffectHooks.js'
import Pagination from './MainMenu/Pagination.js'
import Hooksuser from './HooksAPI/hooksUser.js'
import HooksView from './HooksAPI/hooksView.js'
import HooksEdit from './HooksAPI/hooksEdit.js'
import HooksSignup from './HooksAPI/hooksSignup.js'
import HooksReduxConnection from './Hooks_with_Redux/HooksReduxConnection.js'

//Routings_setup
function Routings(){
    return(
     <React.Fragment>
      <BrowserRouter>
            
        {/* Header Navbar links */}
          <Header/>
          
        
         
         <Switch>

         <Route exact path = "/" component={Home}/>
         
         <Route path = "/home" component={Home}/>

         <Route path = "/about" component={About}/>
        
         <Route path = "/services" component={Services}/>

         <Route path = "/myclass" component={Myclass}/>
        
         <Route path = "/lifecycle" component={Lifecycle}/>
        
         <Route exact path = "/restapi" component={Restapi}/>

         <Route exact path = "/restapi/view/:idno" component={View}/>
         <Route exact path = "/restapi/edit/:idno" component={Edit}/>


         <Route exact path = "/rb" component={ReactBootstrap}/>

         <Route exact path = "/signup" component={Signup}/>

         <Route path = "/rrc" component={ReactReduxConnection}/> 
         <Route path = "/rhush" component={RHuseStateHooks}/>
         <Route path = "/rhueh" component={RHuseEffectHooks}/>
         <Route path = "/pagination" component={Pagination}/>
         
         <Route exact path = "/hooksuser" component={Hooksuser}/>
         <Route path = "/hooksuser/view/:idno" component={HooksView}/>
         <Route path = "/hooksuser/edit/:idno" component={HooksEdit}/>
       
         <Route path = "/hookssignup" component={HooksSignup}/>
         <Route path = "/hooksredux" component={HooksReduxConnection}/>

         <Route path = "/contact" component={Contact}/> 

         <Route path = "/itservices" component={Itservices}/>

         {/*Auto Redirect to Home component if invalid path from URL Address */}
         <Redirect to="/home" />
                       
         <Route path='*' component={Pagenotfound}/> 
        
        
        </Switch>
       
        
    
      {/* Footer Navbar link */}
        <Footer/>   
        </BrowserRouter>
  </React.Fragment>
    )   
}
export default Routings;