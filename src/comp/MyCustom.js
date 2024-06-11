import React from 'react'
import { Container, Form, Navbar } from 'react-bootstrap'
import PropTypes from 'prop-types';

export default function MyCustom(prop) {
  return (
    <Container>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control style={{backgroundColor:'black', color:'white'}} type="email" placeholder="name@example.com" onChange={prop.onChange} />
      </Form.Group>
    </Container>
  )
}


// MyCustom.propTypes = {
//     name:PropTypes.string.isRequired
// }

// MyCustom.defaultProps={
//     name:"Akash"
// } 
