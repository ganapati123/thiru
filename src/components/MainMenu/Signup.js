import React,{Component} from 'react';
import axios from 'axios';

const url = `http://localhost:3001/users`

class Signup extends Component{
     
    constructor(props){
        super(props);
        this.state={
                    uname: '',
                    email: '',
                    phone: '',
          txtConfirmation: ''
        }
    }

    //Name_input_textbox
    unameHandling = (e)=>{
        this.setState({uname:e.target.value})
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
            "name": this.state.uname,
            "email": this.state.email,
            "phone": this.state.phone
         }
         alert(JSON.stringify(formData));

         //for Alertbox 
        //  axios.post(url,formData).then(()=>window.alert("Created")).catch(()=>window.alert("Error"))
   

        //confirmation we are seeing in text formate
        // axios.post(url,formData)
        // .then(()=>this.setState({txtConfirmation : 'Account created'}))
        // .catch(()=>this.setState({txtConfirmation : 'Account failed'}))


        //Auto Redirection purpose we are using props history concept
        // axios.post(url,formData)
        // .then(()=>this.props.history.push('/restapi'))

        //both ALERT BOX and REDIRECTION for confirmation
        axios.post(url,formData)
        .then(()=>{
            window.alert("Created");
            this.props.history.push('/restapi')
        });
    }

    render(){
        console.log(this.props)
        //Destructuring
         var {uname,email,phone,txtConfirmation} = this.state

        return(<>
           
           <div className="container p-3">
              <h4 className='py-3 text-center'>Signup form</h4>

              <div className='container w-50'>
                    <form onSubmit={this.submitHandler.bind(this)}>
                        
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-control" 
                                 value={uname} 
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
                            <button type="submit" className='btn btn-primary'>CREATE ACCOUNT</button>
                        </div>
                        <p className='text-primary'>{txtConfirmation}</p>
                    </form>
              </div>
           
             
           </div>
        
        </>)
    }
}
export default Signup;