import React, { Component } from 'react'

import UnderConstructionImg from '../assets/under-construction.svg';

export default class UnderContruction extends Component {
  render() {
    return (
      <div style={{width:'100%',display:'flex',marginTop:'100px',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h2>Page is under construction</h2>
        <br/>
        <div style={{marginTop:'40px',width:'80%',height:'500px',display:'flex',justifyContent:'center'}}>
            <img style={{width:'60%'}} src={UnderConstructionImg} alt="under-construction"/>
        </div>
      </div>
    )
  }
}
