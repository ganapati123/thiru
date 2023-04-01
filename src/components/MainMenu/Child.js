import React from 'react'



function Child(props){
    console.log(props)
    var{eid,ename,email,esal,eaddress}=props
    return(<>
       <div className="border p-5">
         <h1>CHILD COMPONENT</h1>
         {eid}-{ename}-{email}-{esal}-{eaddress}
       </div>
       
    </>)
}
export default Child;