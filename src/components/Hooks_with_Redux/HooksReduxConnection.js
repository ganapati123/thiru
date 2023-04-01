import  {React,useState,useEffect} from 'react';

//step-1
import { connect } from 'react-redux';

//step-4 
import { bindActionCreators } from 'redux';
import EmpAction from './../../actions/empAction.js'  //External data ->REST API
import UserAction from './../../actions/userAction.js'
import StudentAction from './../../actions/studentAction.js'


let HooksReduxConnection =(props)=>{
   let[userData,setUserData]=useState({})
    
  

   useEffect(()=>{
     props.EmpAction();
     props.UserAction();
     props.StudentAction();
   },[])

  
     return(<>
            <div className='container p-5'>
                <h2 className='text-center'>ReactReduxConnection Example</h2>
                
               <h3>Synchronous data(direct data) from Redux-Actions</h3>
                {
                    props.empdata.map((res,i)=>{
                        return(<ul key={i}>
                                <li>{res.id}</li>
                                <li>{res.name}</li>
                                <li>{res.email}</li>
                        </ul>)
                    })
                }
 
                <h3>Asynchronous data(Rest API) from Redux-Actions</h3>
                {
                   props.userdata.map((res,i)=>{
                        return(<ul key={i}>
                                <li>{res.id}</li>
                                <li>{res.name}</li>
                                <li>{res.email}</li>
                        </ul>)
                    })
                }

               <h3>Asynchronous data-2(Local API) from Redux-Actions</h3>
                {
                   props.studentdata.map((res,i)=>{
                        return(<ul key={i}>
                                <li>{res.id}</li>
                                <li>{res.name}</li>
                                <li>{res.email}</li>
                        </ul>)
                    })
                } 
            </div>
             
           </>)
   
}

//step-3 
const mapStateToProps=(state)=>{
  //get the data from the Redux store by using reducers
 // console.log(state)
      return(
        {
            empdata:state.EmpReducer,
            userdata:state.UserReducer,
            studentdata:state.StudentReducer
        }
      )

 }

 const mapDispatchToProps=(dispatch)=>{
  //calling redux actions 
  return bindActionCreators({EmpAction,UserAction,StudentAction},dispatch) 
 }


//export default ReactReduxConnection  -->this is normal React export

//step-2
export default connect(mapStateToProps,mapDispatchToProps)(HooksReduxConnection)    //-->this is react-redux export after connection b/w redux store and react component