import React from 'react'

//Global variable
//var name="Ganapti"

class Myclass extends React.Component{

    //class properties
    // id=101;
    // email="gana@gmail.com"
   
    //constructor
    constructor(props){
        super(props)

        //step-1 state object Initialization
        this.state=
        {
           email : "gana@gmail.com",
           phone :7891234567
        }
    }

    //our customized function
    stateChanges=()=>
    {
        this.setState({
            email:'chgana.venkat@gmail.com',
            phone:9998887770
        })
    }

    //render is a class_function or method and Prepare the Component_Input 
    //outside of class statements and local statements are directly access in render()function
    render()
    {
        
        return(<>
           <div className='container p-5'>
          
          <h1>React_class_component & State_Obj & Events </h1>
          {/* {this.id}-{name}-{this.myfun()} */}
         
         {/* Access state Object properties from render */}
          <p>Email is:{this.state.email}</p>
           
           {/* change state object data by this.setState({}) object */}
           <button onClick={()=>this.setState({email:'chganapati@gmail.com'})}>Change Email</button>
            
            
            <br/><br/>

             {/* Access state Object properties from render */}
           <p>Email is:{this.state.phone}</p>
           
           {/* change state object data by this.setState({}) object */}
           <button onClick={()=>this.setState({phone:9876543210})}>Change PhoneNo</button>

          <br/><br/>  
          <button onClick={()=>this.stateChanges()}>Update All state properties</button>

          </div>
        </>);
    }


}
export default Myclass;