import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignupImage from '../../assets/signup-admin.svg'
import {Link} from 'react-router-dom';

export default class SignupAdmin extends Component {
  render() {
    return (
      <div>
        <div style={{display:'flex',padding:'10px',marginTop:'100px',justifyContent:'space-around'}}>
          <div style={{padding:'20px'}} className="shadow p-3 mb-5 bg-white rounded">
          <Form style={{padding:'20px'}}>
              <Form.Group className="mb-3" style={{width:'500px'}} controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <b>Already user ? <Link style={{color:'#E9A630'}} to='/student-login'>Login</Link></b>
              <br/>
              <Button variant="primary" style={{backgroundColor:'#E9A630',marginTop:'20px',border:'none'}} type="submit">
                <Link style={{textDecoration:'none',color:'white'}} to='/admin'>Sign up</Link>
              </Button>
          </Form>
          </div>
          <div className="right-section">
              <img alt="Signup" src={SignupImage} style={{height:'400px',width:'500px',}}/>
          </div>
        </div>
      </div>
      
    )
  }
}
