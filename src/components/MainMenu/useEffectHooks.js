import {React, useEffect, useState} from 'react'
import axios from 'axios'

const apiurl=`https://fakestoreapi.com/products`
export default(props)=> {

  //state Object implementation
  var[products,setProducts]=useState([])

  //API CALLS by HOOKS
  useEffect(()=>{
     axios.get(apiurl).then((res)=>setProducts(res.data))
  },[])

  return (<>
    <div className='container p-5'>
        
        <h3 className='text-center'>useEffectHooks in React for API CALLS</h3>
       
        <div className='row'>
            {
                products.map((res,i)=>{
                    
                    return(<div className='col-lg-3' key={i}>
                                <div className="card" >
                                        <img src={res.image} className="card-img-top w-50 mx-auto my-2 " style={{height:"200px"}}/>
                                        <div className="card-body">
                                            <h6 className="card-title">{res.title.slice(0,20)}</h6>
                                            <h5 className="card-title">${res.price}</h5>
                                            <p className="card-text">{res.description.slice(0,80)}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                          </div>)
                })
            }
        </div>

    </div>
  </> )
}

 