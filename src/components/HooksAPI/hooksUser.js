import React,{ useState,useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

//Global variable for Rest_api url
//const url = `https://jsonplaceholder.typicode.com/users` 
const url = `http://localhost:3001/users`

export default ()=>{

 let [userData,setUserData]=useState([])

 let getData=()=>{
    axios.get(url).then((res)=>setUserData(res.data))
 }
   
   useEffect(()=>{ getData() },[])
   

   //Delete data
  let DeleteHandler=(id)=>{
     if(window.confirm(`Delete this record number is ${id}?`))
     {
      //This is used for  Delete
      axios.delete(`${url}/${id}`)//http://localhost:3001/users/1
   
      //fetch the remaing data after delete the particular data and display that remain data
       getData()
     }
   }
   
   
   
        return(<>
          <div className='container p-5'>
            <h3 className='text-center'>FETCH REST API DATA USING LOCAL URL/CLIENT</h3>
            <table className='table table-dark table-borderd my-5'>
               <thead className='table table-light'>
                <tr>
                  <th>SNO </th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th colSpan='3' className='text-center'>ACTION</th>
                </tr>
               </thead>
               <tbody>
                  {
                    userData.map((res,i)=>{
                    return(<tr key={i}>
                            <td>{i+1}</td>
                            <td>{res.name}</td>
                            <td>{res.email}</td>
                            <td>{res.phone}</td>
                            <td>
                              <Link to={`/hooksuser/view/${res.id}`} className='btn btn-primary'>View</Link>
                            </td>

                            <td>
                              <Link to={`/hooksuser/edit/${res.id}`} className='btn btn-warning'>Edit</Link>
                            </td>

                            <td>
                              <button onClick={()=>DeleteHandler(res.id)} className='btn btn-danger'>Delete</button>
                            </td>

                        

                    </tr>)
                  })
                }
               </tbody>

            </table>
          </div>
        
        </>)
    
   
}
