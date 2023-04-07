import React, { Component } from 'react'
import { motion } from 'framer-motion'

export default class CompanyCardsOnLanding extends Component {
  render() {
    return (
        <motion.div 
            whileHover={{
            scale:'1.1',
            boxShadow:'rgba(0,0,0,0.45) 0px 25px 20px -20px'
            }}
            transition={{
            delay:'0.1',
            ease:'linear'
            }}
            className="card" style={{margin:'10px',width:'20%' ,height:'250px' ,padding:'20px 10px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <img style={{width:'90%'}} src={this.props.logo} alt='google' />
            <p>{this.props.name}</p>
        </motion.div>
    )
  }
}
