import React from 'react'
import { Button, Row, Col, Container, Nav, Navbar, FormControl, Form, InputGroup } from 'react-bootstrap';
import OlxLogo from '../../images/olx-logo.png';
import './home.css'
import { connect } from 'react-redux'
import { post } from '../../store/action'
import * as Icon from 'react-bootstrap-icons';
import { button } from 'bootstrap'




class Home extends React.Component {
  render() {
    console.log("redux data===>", this.props)
    let data_entry = { name: "ushna karim" }

    // CREATE UI HERE


    return (
      <Container fluid>
        {/* header row */}
        <button type="button" class="btn btn-primary">Primary</button>

        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home"><img src={OlxLogo} width="50px" /></Navbar.Brand>
          <Nav className="mr-auto">
            {/* first search */}
            <Nav.Link href="#navSearch">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>

                    {/* using icon for search */}
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                      <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                    </svg>


                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="" placeholder="karachi" />
                <InputGroup.Append>
                  <InputGroup.Text>
                    {/* using icon for down arrow */}
                    <Icon.Plus />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Nav.Link>
            <Nav.Link href="#features">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>

                </InputGroup.Prepend>
                <FormControl className="inputNav" aria-label="" placeholder="Find Cars, Mobile Phones and more" />
                <InputGroup.Append>
                  <InputGroup.Text >

                    {/* using icon for search */}
                    <Icon.Plus />


                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>

            </Nav.Link>


            {/* chat button */}


            <Nav.Link>
            <Icon.Plus />
            </Nav.Link>


            {/* notification button */}


            <Nav.Link>
            <Icon.Plus />
            </Nav.Link>





            {/* login button */}


            <Nav.Link>
              <u>Login</u>
            </Nav.Link>

            {/* login button */}


            <Nav.Link className="sellbutton">
              <Icon.Plus />SELL
                  </Nav.Link>






          </Nav>
        </Navbar>

      </Container>




    )
  }
}


const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  postadd: (data) => dispatch(post(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
