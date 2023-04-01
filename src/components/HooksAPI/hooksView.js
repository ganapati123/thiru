import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';

//Global variable
var idno;

//Global variable for Rest_api url
//const url = `http://localhost:3001/users`

export default (props)=>{
    let [state,setState]=useState({
        id:"",
        name:"",
        email:"",
        phone:""
    })
 
//get parameter value
let {idno}=useParams()

//destructuring for object
let {id,name,email,phone}=state

//Rest api calls
useEffect(()=>{
    const url = `http://localhost:3001/users/${idno}`
    axios.get(url).then((res)=>setState(res.data))

},[])     
        return(<>
           
       
                <div className='container p-5'>
                  <h2>VIEW COMPONENT PAGE</h2>
                  <p>{idno} th record </p> 
                  <ul>
                        <li>{id}</li>
                        <li>{name}</li>
                        <li>{email}</li>
                        <li>{phone}</li>

                  </ul>

                  <Link className='btn btn-success' to="/hooksuser">Go Back</Link>
                </div>
       </> )
    }

   
    


