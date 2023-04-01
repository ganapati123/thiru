import {React} from 'react';

//Pager
export default (props) => {
    //empty Array 
    var numbers=[];

    var{totalPostsInAPI,maxDisplayRecordsPerButton,getButtonNumber}=props

    //var numberOfButtons =totalPostsInAPI/maxDisplayRecordsPerButton

    var numberOfButtons = Math.ceil(totalPostsInAPI/maxDisplayRecordsPerButton)

    for(let i=1;i<=numberOfButtons;i++){
        numbers.push(i) //1 to 10 numbers push into the array
    }

  return (<>
    <div className='container p-5'>
        
        <ul className='pagination'>
            {
                numbers.map((bno,i)=>
                    <li className="page-item" key={i}>
                    <a className="page-link" onClick={()=>getButtonNumber(bno)}>{bno}</a>
                    </li>)
            }
        </ul>
       
    </div>
  </> )
}

 