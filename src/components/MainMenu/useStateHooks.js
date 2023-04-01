import {React, useState} from 'react'

export default(props)=> {

  //state Object implementation
  var[email,setEmail]=useState("gana@gmail.com")

  //state Object changes
  let handleEmail=()=>{
    setEmail("ganapati@gmail.com")
  }
  return (<>
    <div className='container p-5'>
        
        <h1>useStateHooks in React</h1>
        
        {email} <br/><br/>

        <button onClick={handleEmail}>UPDATE EMAIL</button>

    </div>
  </> )
}

 