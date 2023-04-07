import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2017',
    unplaced: 9800,
    
  },
  {
    name: '2018',
    unplaced: 6100,
    
  },
  {
    name: '2019',
    unplaced: 4578,
    
  },
  {
    name: '2020',
    unplaced: 3234,
    
  },
  {
    name: '2021',
    unplaced: 2001,
    
  },
  {
    name: '2022',
    unplaced: 987,
    
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-line-chart-r5z0f';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="unplaced" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
