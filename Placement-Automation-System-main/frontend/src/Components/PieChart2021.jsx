import React, { Component } from 'react'

import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'COMP', value: 346 },
  { name: 'IT', value: 325 },
  { name: 'ENTC', value: 297 },
  { name: 'MECH', value: 143 },
  { name: 'ELECTRICAL', value: 201 },
  { name: 'CIVIL', value: 86 },

];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text style={{zIndex:'3'}} x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</text>
      {/* <text style={{zIndex:'3'}} x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text> */}
    </g>
  );
};

export default class PieChart2021 extends Component {

    state = {
      activeIndex: 0,
    };
  
    onPieEnter = (_, index) => {
      this.setState({
        activeIndex: index,
      });
    };
  
    render() {
      return (
        <div className='shadow' style={{padding:'10px',height:'245px',backgroundColor:'white',width:'100%'}}>
            {/* <br/> */}
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#E9A630"
                    dataKey="value"
                    onMouseEnter={this.onPieEnter}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
        
      );
    }
}
