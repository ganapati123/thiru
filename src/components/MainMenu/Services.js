//Services.js  -->root component
import React from 'react'

// //icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faMobileAlt, faLadderWater, faSadTear} from '@fortawesome/free-solid-svg-icons'
 //import {FaCoffee,FaSpiderWeb,FaMobile,FaTachographDigital} from 'react-icons/fa'

 //import External Local JSON file data into component
// import ServiceData from './assets/json/Services.json'

//styles
var bgc ={backgroundColor:'#12151c'}

var ServiceData=[
    {
        "icons":faCoffee,
        "title":"Data Science",
        "description":"Data science combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI), and machine learning with specific subject matter expertise to uncover actionable insights hidden in an organization's data. These insights can be used to guide decision making and strategic planning."
    },
    {
        "icons":faSadTear,
        "title":"Artificial Intelligence",
        "description":"The Artificial Intelligence Engineer is an IT expert whose mission is to develop intelligent algorithms capable of learning, analysing and predicting future events. Their role is to create machines capable of reasoning like the human brain."
    },
    {
        "icons":faCoffee,
        "title":"Analytics",
        "description":"A Data Analyst's responsibilities include the deep analysis of data and then determining the best way to represent it visually to managers and stakeholders. They also ensure quality assurance and process documentation and define Key Performance Indicators (KPIs)."
    },
    {
        "icons":faMobileAlt,
        "title":"App Development",
        "description":"Manage project execution to ensure adherence to budget, schedule, and scope. Develop or update project plans for information technology projects, including project objectives, technologies, systems, information specifications, schedules, funding, and staffing. Maintain applications according to SLAs."
    },
    {
        "icons":faLadderWater,
        "title":"Web Design and Development",
        "description":"Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips. A web designer is responsible for creating the design and layout of a website or web pages. It and can mean working on a brand new website or updating an alredy"
    },
    {
        "icons":faCoffee,
        "title":"Digital Transformation",
        "description":"As a Digital Transformation Specialist, you will work as part of a team that focuses on helping our clients design and implement strategies to reinvent customer experience. You will advise, shape and deliver technology led transformation programs aiming to enhance end customers' digital experience."
    }
]


//create Services component
function Services(){
   return (<>
         <div className='container-fluid' style={bgc}>
            <div className='container p-5 text-center'>
                <h1 className='pt-2 pb-5 text-white'>OUR SERVICES</h1>
                <div className='row'>

                  {
                      ServiceData.map((data,i)=>{

                        console.log(data)
                        return (<div className='col-lg-4 box' key={i}>
                          <div className='card text-center text-white p-3' style={bgc}>
                          {/* <FontAwesomeIcon icon={icons[carFeature?.icon]} /> */}
                            <p className='text-center'>
                            <FontAwesomeIcon icon={data.icons} size="4x" className='fw-bold text-success icons'/>
                            </p>
                            <i className='fab fa-adobe text-weight-bold text-success'></i>
                            
                            <div className='card-body'>
                                <h3 className='py-3'>{data.title}</h3>
                                <p className='text-justify'>{data.description}</p>
                            </div>
                       
                        </div>
                    </div>)

                    })
                  }

                  
                    

                  {/*  <div className='col-lg-4'>
                        <div className='card text-center text-white p-3' style={bgc}>
                           <p>
                                <FaAward size='70px' className='icon fw-bold text-success'/>
                            </p>
                            <i className='fab fa-adobe text-weight-bold text-success'></i>
                            <div className='card-body'>
                                <h3 className='py-3'>MARKETION</h3>
                                <p className='text-justify'>In Publishing and Graphic Design,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='card text-center text-white p-3' style={bgc}>
                            <p>
                                <FaCodeBranch size='70px' className='icon fw-bold text-success'/>
                            </p>
                            <i className='fab fa-adobe text-weight-bold text-success'></i>
                            <div className='card-body'>
                                <h3 className='py-3'>BRANDING</h3>
                                <p className='text-justify'>In Publishing and Graphic Design,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='card text-center text-white p-3' style={bgc}>
                            <p>
                                <FaCoffee size='70px' className='icon fw-bold text-success'/>
                            </p>
                            <i className='fab fa-adobe text-weight-bold text-success'></i>
                            <div className='card-body'>
                                <h3 className='py-3'>UI/UX DESIGN</h3>
                                <p className='text-justify'>In Publishing and Graphic Design,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='card text-center text-white p-3' style={bgc}>
                           <p>
                                <FaAward size='70px' className='icon fw-bold text-success'/>
                            </p>
                            <i className='fab fa-adobe text-weight-bold text-success'></i>
                            <div className='card-body'>
                                <h3 className='py-3'>MARKETION</h3>
                                <p className='text-justify'>In Publishing and Graphic Design,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='card text-center text-white p-3' style={bgc}>
                            <p>
                                <FaCodeBranch size='70px' className='icon fw-bold text-success'/>
                            </p>
                            <i className='fab fa-adobe text-weight-bold text-success'></i>
                            <div className='card-body'>
                                <h3 className='py-3'>BRANDING</h3>
                                <p className='text-justify'>In Publishing and Graphic Design,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration,Lorem Ipsum is a placeholder testing migration</p>
                            </div>
                        </div>
                    </div> */}

                    
                </div>
            </div>
        </div>

   </>)
}
export default Services;