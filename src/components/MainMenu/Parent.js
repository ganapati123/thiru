//Parent.js -->module
import React from 'react'
import Child from './Child'



function Parent(){
    var eid=1, ename='Ganapati' ,email='gana@gmail.com', phno=7896543210

        return(<>
            <div className="border p-5">
                <h1>PARENT COMPONENT</h1>
                {eid}-{ename}-{phno}

                <br/>
                <Child eid={eid} ename={ename} email={email} esal="30000" eaddress="Hyderabad"/>

            </div>
        </>)
    }
    export default Parent;