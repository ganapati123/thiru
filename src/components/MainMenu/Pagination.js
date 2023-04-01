import {React, useEffect, useState} from 'react'
import axios from 'axios'
import Pager from './Pager'

const apiurl=`https://jsonplaceholder.typicode.com/posts`
export default(props)=> {

  //state Object implementation
  var[posts,setPosts]=useState([])

  //select max default posts per Action
  var[defaultMaxPosts]=useState(8);

  //FirstButton number
  var[defaultButton,setDefaultButton]=useState(1)

  //lastIndex and firstIndex
  var lastIndex=defaultButton*defaultMaxPosts //1*8=8
  var firstIndex= lastIndex-defaultMaxPosts //8-8=0

  //API CALLS by HOOKS
  useEffect(()=>{
     axios.get(apiurl).then((res)=>setPosts(res.data))
  },[]);

  //Display Default posts
  //var displayDefaultButtonPosts = posts.slice(firstIndex,lastIndex)

  //Total Posts from API
  var totalPosts = posts.length

  //function
 let handleButtonNumberChanges=(btnNumber)=>{
    setDefaultButton(btnNumber) //2,3,4,...etc
  }

  return (<>
    <div className='container p-1'>
        
       <h5 className='text-center'>Showing {firstIndex+1}-{lastIndex} results for Posts</h5>

           <Pager totalPostsInAPI={totalPosts} 
           maxDisplayRecordsPerButton={defaultMaxPosts}
           getButtonNumber={(bno)=>handleButtonNumberChanges(bno)}/>
       
       <br/><br/>

            {
                // posts.map((res,i)=>{
                 // displayDefaultButtonPosts.map((res,i)=>{
                    posts.slice(firstIndex,lastIndex).map((res,i)=>{
                    
                    return(<ul  key={i}>
                            <li>
                                <h4>{res.id}:{res.title}</h4>
                                <p>{res.body}</p>
                            </li>    
                          </ul>)
                })
            }
        

    </div>
  </> )
}

 