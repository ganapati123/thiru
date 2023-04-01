import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//Global variable
var idno;

//Global variable for Rest_api url
const url = `http://localhost:3001/users`

class Edit extends Component{
    constructor(props){
        super(props);
            
        //here your choice is: take a empty object like(this.state{viewdata:{}}) inside state object
        this.state={
                    name: '',
                    email: '',
                    phone: '',
          txtConfirmation: ''
        } 
    }

     //Name_input_textbox
     unameHandling = (e)=>{
      this.setState({name:e.target.value})
  }

  //Email_input_textbox
  emailHandling = (e)=>{
      this.setState({email:e.target.value})
  }

  //phone_input_textbox
  phoneHandling = (e)=>{
      this.setState({phone:e.target.value})
  }

  //submit
  submitHandler=(e)=>{
     
      e.preventDefault(); //event.preventDefault() method is only for using when you submit the details that time dont refresh the page
       
      //this is for single input statement
      //alert(this.state.uname) 

      //I want to send to API for that i this data i have taken in the form of Object
       var formData = {
          "name": this.state.name,
          "email": this.state.email,
          "phone": this.state.phone
       }
       alert(JSON.stringify(formData));

            //both ALERT BOX and REDIRECTION for confirmation
      axios.put(`${url}/${idno}`,formData)
      .then(()=>{
          window.alert("Updtated");
          this.props.history.push('/restapi')
      });
  }


    render(){
        idno=this.props.match.params.idno
        console.log(idno)
       //Destructuring
       var {name,email,phone,txtConfirmation} = this.state

        return(<>
           
       
                <div className='container p-5'>
                  <h4 className='text-center'>EDIT COMPONENT PAGE</h4>
                    
                    <form onSubmit={this.submitHandler.bind(this)}>

                         <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-control" 
                               value={name}
                               onChange={this.unameHandling.bind(this)}/>
                         </div>

                         <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" 
                              value={email}
                              onChange={this.emailHandling.bind(this)}/>
                         </div>

                         <div class="mb-3">
                            <label class="form-label">Phone</label>
                            <input type="number" class="form-control" 
                              value={phone}
                              onChange={this.phoneHandling.bind(this)}/>
                         </div>

                         <div class="mb-3">
                         <Link className='btn btn-success mx-2' to="/restapi">Go Back</Link>
                            <button type="submit" class="text-white btn btn-warning" value="Update">Update</button>
                         </div>
                       
                    </form>

                 {/* <p>{idno} th record </p> 
                  <ul>
                        <li>{id}</li>
                        <li>{name}</li>
                        <li>{email}</li>
                        <li>{phone}</li>
                  </ul> */}
                </div>
       </> )
    }

    //Rest API calls
    componentDidMount()
    {
       axios.get(`${url}/${idno}`).then((res)=>this.setState(res.data))
      
      
       //const url = `http://localhost:3001/users/${idno}`
       //axios.get(url).then((res)=>this.setState(res.data))

    }

}
export default Edit;