import React, { Component } from 'react'
import LoginImage from '../../assets/login-admin.svg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

export default class LoginAdmin extends Component {
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
                        <b>New user ? <Link style={{color:'#E9A630'}} to='/admin-signup'>Signup</Link></b>
                        <br/>
                        <Button  style={{backgroundColor:'#E9A630',marginTop:'20px',border:'none'}} type="submit">
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
