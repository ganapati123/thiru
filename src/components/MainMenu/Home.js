//Home.js  -->root component
import React from 'react'

//import image
import profile from './assets/images/dhoni.jpg'

//import background image 
import wallpaper from './assets/images/single-circle.png'

//Internal styles
var styles={
    backgroundImage:`url(${wallpaper})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
}

//create Home component
function Home(){
   
    return (<>
        <div className='jumbotron text-white p-5' style={styles}>
            <div className='container'>
                <div className='row'>
                     
                    <div className='col-lg-6'>
                        <h1 className='h1 pt-5 mt-5'>I am Ganapatirao  Chanchala</h1>
                        <h5 className='bg-success p-2 mt-3 w-75 text-center'>FrontEnd Developer</h5> 
                    </div>
                    
                    <div className='col-lg-6'>
                        <img src={profile} className='w-75 mx-auto img-thumbnail'/>
                    </div>
               
                </div>
            </div>
        </div>
        
      </>)

}
export default Home;