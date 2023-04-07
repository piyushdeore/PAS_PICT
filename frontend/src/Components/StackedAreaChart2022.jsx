import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  {
    name: '2017',
    COMP: 4000,
    IT: 2400,
    ENTC: 2400,
    MECH: 4000,
    ELEC: 2400,
    CIVIL: 2400,
  },
  {
    name: '2018',
    COMP: 3000,
    IT: 1398,
    ENTC: 2210,
    MECH: 2000,
    ELEC: 1284,
    CIVIL: 1234,
  },
  {
    name: '2019',
    COMP: 2000,
    IT: 9800,
    ENTC: 2290,
    MECH: 2840,
    ELEC: 2145,
    CIVIL: 1255,
  },
  {
    name: '2020',
    COMP: 2780,
    IT: 3908,
    ENTC: 2000,
    MECH: 3151,
    ELEC: 1245,
    CIVIL: 1222,
  },
  {
    name: '2021',
    COMP: 1890,
    IT: 4800,
    ENTC: 2181,
    MECH: 3456,
    ELEC: 2355,
    CIVIL: 1245,
  },
  {
    name: '2022',
    COMP: 2390,
    IT: 3800,
    ENTC: 2500,
    MECH: 2567,
    ELEC: 3542,
    CIVIL: 1255,
  },

];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
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
          <Legend/>
          <Area type="monotone" dataKey="COMP" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="IT" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="ENTC" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" dataKey="MECH" stackId="1" stroke="#000000" fill="#000000" />
          <Area type="monotone" dataKey="ELEC" stackId="1" stroke="#C0C0C0" fill="#C0C0C0" />
          <Area type="monotone" dataKey="CIVIL" stackId="1" stroke="#FF0000" fill="#FF0000" />
        
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
