import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jul-Aug',
    a: 328,
    b: 301,
    c: 289,
    d: 257
  },
  {
    name: 'Sep-Oct',
    a: 297,
    b: 283,
    c: 268,
    d: 202
  },
  {
    name: 'Nov-Dec',
    a: 266,
    b: 201,
    c: 223,
    d: 188
  },
  {
    name: 'Jan-Feb',
    a: 236,
    b: 182,
    c: 186,
    d: 167
  },
  {
    name: 'Mar-Apr',
    a: 144,
    b: 123,
    c: 99,
    d: 75
  },
  {
    name: 'May-Jun',
    a: 127,
    b: 91,
    c: 53,
    d: 39
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <Line name='2021-22' type="monotone" dataKey="a" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line name='2020-21' type="monotone" dataKey="b" stroke="#82ca9d" activeDot={{ r: 8 }} />
          <Line name='2019-20' type="monotone" dataKey="c" stroke="#E9A630" activeDot={{ r: 8 }} />
          <Line name='2018-19' type="monotone" dataKey="d" stroke="#000000" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
