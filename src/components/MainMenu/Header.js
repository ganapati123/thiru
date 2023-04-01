import React from 'react'

//import link from react-router-dom
import { NavLink } from 'react-router-dom'

function Header(){
var MenuNames = ["Home","About","Services","Itservices","Contact","Myclass","Lifecycle","Restapi","RB","Signup","RRC","RHush","RHueh","Pagination","Hooksuser","HooksSignup","HooksRedux"]

    return(<>
       
            {/* Links for Menu */}

 <nav className="navbar navbar-expand-lg navbar-light"
   style={
    {
      backgroundColor:'#475562',
      borderBottom:'0.5px white solid',
      borderTop:'0.5px white solid'

    }
  } >
  
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      {/*<ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link " activeClassName="bg-white" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " activeStyle={{backgroundColor:'white',color:'black'}} to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " activeStyle={{backgroundColor:'white',color:'black'}} to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link " activeClassName=" bg-light text-black" to="contact">Contact</NavLink>
        </li>
      </ul>*/}
       <ul className='navbar-nav'>
        {
          MenuNames.map((res,i)=> 
                <li className='nav-item px-1' key={i}>
                  <NavLink activeClassName='bg-dark' className="nav-link text-primary"  to={`/${res.toLowerCase()}`}>{res}</NavLink>
                </li>

          )
        }
       </ul>
    </div>
  </div>
</nav>

      </>)
}
export default Header;