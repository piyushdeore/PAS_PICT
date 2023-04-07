import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Comp',
    placed: 332,
    Registered: 346,
  },
  {
    name: 'IT',
    placed: 321,
    Registered: 327,
  },
  {
    name: 'ENTC',
    placed: 298,
    Registered: 330,
  },
  {
    name: 'MECH',
    placed: 195,
    Registered: 319,
  },
  {
    name: 'ELEC',
    placed: 246,
    Registered: 315,
  },
  {
    name: 'CIVIL',
    placed: 132,
    Registered: 278,
  },

];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
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
          <Bar dataKey="placed" fill="#8884d8" />
          <Bar dataKey="Registered" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
