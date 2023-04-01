import React,{Component} from 'react'

  class Lifecycle extends Component{

   //constructor also mounting method
   constructor(){
    super();
    this.state={}
    console.log(`*******CONSTRUCTOR IS MOUNTING METHOD*******`)
   }
    

   UNSAFE_componentWillMount(){
    console.log(`*******componentWillMount IS MOUNTING METHOD*******`)

   }
   
    //render is mounting method
    render(){
        console.log(`*******RENDER IS MOUNTING METHOD*******`)
        return(<>
            <div className='content p-5 text-center'>
               <h2>React class Component Lifecycle</h2>
            </div>
            </> )
    }

    componentDidMount(){
        console.log(`*******componentDidMount IS MOUNTING METHOD*******`)
    }
  }
  export default Lifecycle;
