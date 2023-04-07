import React, { Component } from 'react'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'COMP',
      enrolled: 284,
      placed: 179,
    },
    {
      name: 'IT',
      enrolled: 223,
      placed: 194,
    },
    {
      name: 'ENTC',
      enrolled: 236,
      placed: 158,
    },
    {
      name: 'MECH',
      enrolled: 252,
      placed: 119,
    },
    {
      name: 'ELE',
      enrolled: 261,
      placed: 125,
    },
    {
      name: 'CIVIL',
      enrolled: 205,
      placed: 93,
    },
  ];
  

export default class BiaxialBarChartCurrentYear extends Component {
  render() {
    return (
      <div className='shadow' style={{height:'250px',backgroundColor:'white' , marginTop:'20px',marginLeft:'50px',padding:'20px'}}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="enrolled" fill="#8884d8" />
          <Bar dataKey="placed" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    )
  }
}
