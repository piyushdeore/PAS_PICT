import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class MainNavigation extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" style={{padding:'10px',color:'white',height:'100px'}}>
            <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
                <div style={{display:'flex',width:'65%',justifyContent:'space-between',alignItems:'center'}}>
                    <div>
                        <h1 style = {{color:'white'}}>
                            <Link to="/" style={{color:'white',fontWeight:'bold',textDecoration:'none'}}>PAS</Link>
                        </h1>
                    </div>
                    <div>
                        <Button style={{borderRadius:'30px',padding:'5px 20px 10px 20px'}}>
                            <Link to="/login-controller" style={{color:'white',textDecoration:'none'}}>Login</Link>
                        </Button >
                    </div>
                </div>
            </div>
        </nav>
    )
  }
}
