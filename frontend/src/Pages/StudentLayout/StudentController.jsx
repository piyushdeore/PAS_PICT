import React, { Component } from 'react'
import {  Outlet } from "react-router-dom";
import Sidebar from '../../Components/Sidebar';
import Naviagationbar from '../../Components/Naviagationbar';



export default class StudentController extends Component {
  render() {
    
    return (
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>
          <Sidebar/>
        </div>
        <div style={{width:'80%' ,display:'flex',flexDirection:'column'}}>
          <div style={{width:'100%'}}>
            <Naviagationbar/>
          </div>
          <div style={{marginLeft:'50px'}}>
            <Outlet/>
          </div>
        </div>
      </div>
    )
  }
}
