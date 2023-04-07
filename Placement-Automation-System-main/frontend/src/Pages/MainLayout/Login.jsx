import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LoginImage from '../../assets/login.svg'
import {Link} from 'react-router-dom';

export default class Signup extends Component {
  render() {
    return (
      <div>
        <div style={{marginTop:'100px'}}>
          <div style={{display:'flex',padding:'10px',marginTop:'50px',justifyContent:'space-around'}}>
            <div style={{padding:'20px'}} className="shadow p-3 mb-5 bg-white rounded">
            <Form style={{padding:'20px'}}>
                <Form.Group style={{width:'500px'}} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <b>New user ? <Link to='/student-signup'>Signup</Link></b>
                <br/>
                <Button variant="primary" style={{backgroundColor:'#4839f5',marginTop:'20px'}} type="submit">
                    Login
                </Button>
            </Form>
            </div>
            <div className="right-section">
                <img alt="Login" src={LoginImage} style={{height:'400px',width:'500px',}}/>
            </div>
          </div>
        </div>
      </div>
      
      
    )
  }
}
