//Services.js  -->root component
import React from 'react'


import WebApplication from './It_services/WebApplication';
import MobileApplication from './It_services/MobileApplication';
import Projectservices from './It_services/Projectservices';
//import Link
import { Link,Switch,Route, BrowserRouter} from 'react-router-dom'



var services =[
    {
        title:"WebApplication",
        routeName:"/web-app"
    },
    {
        title:"MobileApplication",
        routeName:"/mobile-app"
    },
    {
        title:"Projectservices",
        routeName:"/project-services"
    }
]
//create Services component
function Itservices(){
   return (<>
   
   <BrowserRouter>
         <div className='container-fluid p-4'>

                  <h2>IT SERVICES</h2>
                    <p>
                        Information technology service management is the activities that are performed 
                        by an organization to design, build, deliver, operate 
                        and control information technology services offered to customers
                    </p>
        
         </div>
            <div className='conainer my-5'>
                
                <div className='row'>
                    
                        <div className='col-lg-3'>
                             {/* <ul className="list-group">
                                
                                
                                    <Link to="itservices/webapp"><li>WebApplication</li></Link>
                                

                                
                                    <Link to="itservices/mobileapp"><li>MobileApplication</li></Link>
                                

                                
                                    <Link to="itservices/projectservices"><li>Projectservices</li></Link>
                                
                               
                            </ul>  */}
                            <ul className='list-group'>
                                {
                                    services.map((data,i)=>{
                                        return (
                                            <li className="list-group-item" key={i}>
                                                <Link to={`/itservices${data.routeName}`}>{data.title}</Link>
                                            </li>)
                                    })
                                } 
                            </ul> 
                            
                        </div>
                    
                        <div className='col-lg-9'>
                            {/* Nested Routing */}
                 <Switch>
                        <Route exact path="/" component={Itservices}/>
                        <Route path="/itservices/web-app" component={WebApplication}/>             
                        <Route path="/itservices/mobile-app" component={MobileApplication}/>                                   
                        <Route path="/itservices/project-services" component={Projectservices}/>
                      
                 </Switch>                           
                            {/* Nested Routing */}
                       
                        </div>
                
                </div>
            
            </div>
        
         
                  
                    
    </BrowserRouter>                

   </>)
}
export default Itservices;