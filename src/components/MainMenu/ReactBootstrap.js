import React,{Component} from 'react'
import axios from 'axios';


//import react-bootstrap package
import {Container,Row,Col,Button,Card} from 'react-bootstrap'

//url
const url = `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`;

class ReactBootstrap extends Component{
    
    constructor(props){
        super(props);
        this.state={
            photos:[]
        }

    }
    
    render(){
        return(<>
            <div className='container text-center'>
               <h4 className='py-3'>React Bootstrap Ui package</h4>

               {/* react-bootstrap */}
               <Container>
                  <Row>
                    {
                        this.state.photos.map((res,i)=>
                        {
                           return(<Col lg={4} md={4} sm={6} xs={12}>
                             
                             <Card className='my-2'>
                                 
                                 <Card.Img variant="top" className='w-50 mx-auto my-2' src={res.thumbnailUrl} />                                  
                                    <Card.Body>
                                       <Card.Title className='h6'>{res.title}</Card.Title>
                                          
                                          {/* <Card.Text>
                                            {}
                                          </Card.Text> */}
                                          
                                          {/* <Button variant="primary">Go somewhere</Button> */}
                                          <a href={res.url} className="btn btn-primary">Visit Site</a>
                                    </Card.Body>
                             
                              </Card>
                           
                           </Col>)
                        }
                        )
                    }
                  </Row>
               </Container>
            </div>
        </>)
        
    }

     //Rest API calls
     componentDidMount()
     {
        axios.get(url).then((res)=>this.setState({photos:res.data}))
     }
}
export default ReactBootstrap;