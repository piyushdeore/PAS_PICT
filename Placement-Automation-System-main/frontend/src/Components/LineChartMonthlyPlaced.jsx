import React, { Component } from 'react'

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
  } from 'recharts';
  
  const data = [
    {
        name: 'July',
        placed: 142,
      },
    {
      name: 'August',
      placed: 223,
    },
    {
      name: 'September',
      placed: 197,
    },
    {
      name: 'October',
      placed: 175,
    },
    {
      name: 'November',
      placed: 131,
    },

  ];

export default class LineChartMonthlyPlaced extends Component {

    render() {
      return (
        <div style={{ width: '100%' }}>
          <h4>Monthly placement report</h4>
           <br/> 
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              width={500}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="placed" stroke="#4839f5" fill="#4839f5" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      );
    }
}
