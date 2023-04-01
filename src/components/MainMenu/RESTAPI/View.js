import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//Global variable
var idno;

//Global variable for Rest_api url
//const url = `http://localhost:3001/users`

class View extends Component{
    constructor(props){
        super(props);
        this.state={} //here your choice is: take a empty object like(this.state{viewdata:{}}) inside state object
    }

    render(){
        idno=this.props.match.params.idno
        console.log(idno)
        var {id, name,email,phone}=this.state //Destructuring
        return(<>
           
       
                <div className='container p-5'>
                  <h2>VIEW COMPONENT PAGE</h2>
                  <p>{idno} th record </p> 
                  <ul>
                        <li>{id}</li>
                        <li>{name}</li>
                        <li>{email}</li>
                        <li>{phone}</li>

                  </ul>

                  <Link className='btn btn-success' to="/restapi">Go Back</Link>
                </div>
       </> )
    }

    //Rest API calls
    componentDidMount()
    {
       //axios.get(`${url}/${idno}`).then((res)=>this.setState(res.data))
       const url = `http://localhost:3001/users/${idno}`
       axios.get(url).then((res)=>this.setState(res.data))

    }

}
export default View;