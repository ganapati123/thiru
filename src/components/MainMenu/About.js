//About.js  -->root component
import React from 'react'


//import image
import profile from './assets/images/dhoni.jpg'

//styles
var h={height:'20px'}

//create About component
function About(){
    return (<>
        <div className='container-fluid' style={{backgroundColor:'#12151c'}}>
            <div className='container p-5 w-75 text-center'>
             <h1 className='display-4 text-white fw-bold py-3'>ABOUT US</h1>   
            <p className='text-white pb-3'>
                lorem Ipsum is simply dummy text of the printing and Typesetting Industry.lorem Ipsum is simply dummy text of the printing and Typesetting Industry.
            </p>

            <div className='jumbotron text-white p-5' style={{borderRadius:'10px',backgroundColor:'#475562'}}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='container w-100'>
                            <table className='table table-borderless text-white'>
                               <tbody>
                                <tr>
                                    <th></th>
                                    <td><img src={profile} style={{borderRadius:'20px',width:'35%',height:'60%'}}/></td>
                                </tr>
                                <tr>
                                    <th>FULLNAME</th>
                                    <td>Ganapatirao</td>
                                </tr>
                                <tr>
                                    <th>Birthday</th>
                                    <td>05/06/1996</td>
                                </tr>
                                <tr>
                                    <th>Mobile No</th>
                                    <td>8142108352</td>
                                </tr>
                                <tr>
                                    <th>Email Id</th>
                                    <td>chganapati96@gmail.com</td>
                                </tr>
                                </tbody> 
                            </table>                          
                        </div>                       
                    </div>
                    <div className='col-lg-6'>
                        <h4>SKILLS</h4>
                        
                        <p className='text-left'>HTML5 & CSS3</p>
                        <div className='progress' style={h}>
                            <div className='progress-bar bg-success' style={{width:'95%'}}>95%</div>
                        </div>
                        
                        <p className='text-left'>BOOTSTRAP</p>
                        <div className='progress' style={h}>
                            <div className='progress-bar bg-success' style={{width:'90%'}}>90%</div>
                        </div>
                       
                        <p className='text-left'>JAVASCRIPT</p>
                        <div className='progress' style={h}>
                            <div className='progress-bar bg-success' style={{width:'85%'}}>85%</div>
                        </div>
                       
                        <p className='text-left'>REACT.JS</p>
                        <div className='progress' style={h}>
                            <div className='progress-bar bg-success' style={{width:'80%'}}>80%</div>
                        </div>
                        
                        <p className='text-left'>REDUX</p>
                        <div className='progress' style={h}>
                            <div className='progress-bar bg-success' style={{width:'78%'}}>78%</div>
                        </div>
                    </div>
                </div>
            </div>
         </div> 
        </div>

    
    </>)
}
export default About;