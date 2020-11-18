import React from 'react'
import { Button, Row, Col, Container, Nav, Navbar, NavDropdown, FormControl, Form, InputGroup } from 'react-bootstrap';
import './ads.css'
import {connect} from 'react-redux';
import {facebook_login, post} from '../../store/action'



class Ads extends React.Component {
    render() {
        return (
            <div>

                <div>
                    <div className="title" >
                        POST YOUR AD
                    </div>
                    <div className="form">


                    <Form>
  <Form.Row>
    <Form.Group as={Col}>
      <Form.Label>Product Name</Form.Label>
      <Form.Control type="text" placeholder="Product Name" />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Price</Form.Label>
      <Form.Control type="number" placeholder="Price" />
    </Form.Group>
  </Form.Row>

  <Form.Group >
    <Form.Label>Description</Form.Label>
    <Form.Control placeholder="Describe your product" />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control  />
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Img Link</Form.Label>
      <Form.Control  />
    </Form.Group>
  

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>



                    </div>








                </div>


            </div>

        )
    }
}
const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps=(dispatch)=>({

  facebook_login : (history) => dispatch(facebook_login(history))
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Ads);
