import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigationbar.css';
import BellImg from '../assets/bell.svg';
import ContactImg from '../assets/contact.svg';
import ChatImg from '../assets/chat.svg';

export default class Naviagationbar extends Component {
  render() {
    return (
        <div >
            <Navbar style={{marginBottom:'10px',position:'fixed',right:'0',top:'0',zIndex:'1'}} >
                <div style={{margin:' 5px 20px',display:'flex',justifyContent:'space-between',width:'40%'}}>
                    {/* <NavbarBrand style={{fontWeight:'bold',fontSize:'30px'}}>Welcome</NavbarBrand> */}
                    <Nav>
                        {/* <NavLink href='#'>Dashboard</NavLink>
                        <NavLink href='#'>Schedule</NavLink>
                        <NavLink href='/student-login'>Login</NavLink> */}
                        {/* <div> */}
                        <div className='nav-icons shadow' style={{height:'40px',width:'40px',display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center',margin:'0px 10px'}}>
                            <img alt="bell" src={BellImg}></img>
                        </div>
                        <div className='nav-icons shadow' style={{height:'40px',width:'40px',display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center',margin:'0px 10px'}}>
                            <img alt="bell" src={ContactImg}></img>
                        </div>
                        <div className='nav-icons shadow' style={{height:'40px',width:'40px',display:'flex',justifyContent:'center',alignContent:'center',alignItems:'center',margin:'0px 10px'}}>
                            <img alt="bell" src={ChatImg}></img>
                        </div>
                        {/* </div> */}
                        

                    </Nav>
                </div>
            </Navbar>
        </div>
    )
  }
}
