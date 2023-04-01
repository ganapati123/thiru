import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import {Link, useParams } from 'react-router-dom';


let url = `http://localhost:3001/users`

export default (props)=>{
     
    
let [state,setState]=useState({
                                name: '',
                                email: '',
                                phone: '',
                    txtConfirmation: ''
                    })
        
    
/*
    //Name_input_textbox
    unameHandling = (e)=>{
        this.setState({uname:e.target.value})
    }

    //Email_input_textbox
    emailHandling = (e)=>{
        this.setState({email:e.target.value})
    }

    //phone_input_textbox
    phoneHandling = (e)=>{
        this.setState({phone:e.target.value})
    }
    */

    //get parameters information
    let {idno}=useParams();

    //rest-api calls
    useEffect(()=>{
        axios.get(`${url}/${idno}`).then((res)=>setState(res.data))
    },[])

    //Destructuring
    var {id,name,email,phone} = state

    let formDataHandling =(e)=>{
        setState({ ...state,  [e.target.name]: e.target.value } )
    }

    //submit
    let submitHandler=(e)=>{
       
        e.preventDefault(); //event.preventDefault() method is only for using when you submit the details that time dont refresh the page
         
        //this is for single input statement
        //alert(this.state.uname) 

        //I want to send to API for that i this data i have taken in the form of Object
         var formData = {
            name:  `${state.name}`,
            email: `${state.email}`,
            phone: `${state.phone}`
         }
         alert(JSON.stringify(formData));

        //both ALERT BOX and REDIRECTION for confirmation
        axios.put(`${url}/${id}`,formData)
        .then(()=>{
           // window.alert("Created");
           props.history.push('/hooksuser')
        });
    }

   
        
        

        return(<>
           
           <div className="container p-3">
              <h4 className='py-3 text-center'>Signup form</h4>

              <div className='container w-50'>
                    <form onSubmit={submitHandler.bind(this)}>
                        
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" 
                                 value={name} name="name"
                                 onChange={formDataHandling.bind(this)}/>                             
                        </div>

                         <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control"
                                value={email} name="email"
                                onChange={formDataHandling.bind(this)}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="number" className="form-control"
                                value={phone} name="phone"
                                onChange={formDataHandling.bind(this)}/>
                        </div>

                        <div class="mb-3">
                         <Link className='btn btn-success mx-2' to="/hooksuser">Go Back</Link>
                            <button type="submit" class="text-white btn btn-warning" value="Update">Update</button>
                         </div>
                    </form>
              </div>
           
             
           </div>
        
        </>)
    }

