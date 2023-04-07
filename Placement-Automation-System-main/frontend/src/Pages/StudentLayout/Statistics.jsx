import React, { Component } from 'react'
import CurrentYearPieChart from '../../Components/PieChartCurrentYear'
import LineChartMonthlyPlaced from '../../Components/LineChartMonthlyPlaced'
import BiaxialBarChartCurrentYear from '../../Components/BiaxialBarChartCurrentYear'

import './Statistics.css';
import Top5CompaniesTable from '../../Components/Top5CompaniesTable';

export default class Statistics extends Component {
  render() {
    return (
      <div style={{marginTop:'20px',width:'100%'}}>
        <h2>Statistics</h2>
        <br/>
        <br/>
        {/* <h4>Current year statistics</h4> */}
        <div style={{marginTop:'40px',width:'95%',display:'flex'}} className="statistics-container">
            <div className="left-side-statistics" style={{width:'50%'}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div  style={{width:'45%',boxShadow:'0 10px 15px 0 rgba(66, 133, 244,.18), 0 20px 20px 0 rgba(66, 133, 244,.15)',color:'white',display:'flex',flexDirection:'column',borderRadius:'10px',backgroundColor:'#4839f5',padding:'5px 20px',justifyContent:'space-between'}}>
                        <h3>868</h3>
                        <span>Students placed</span>
                    </div>
                    <div className='shadow-sm' style={{width:'45%',display:'flex',flexDirection:'column',borderRadius:'10px',backgroundColor:'white',padding:'5px 20px',justifyContent:'space-between'}}>
                        <h3>1461</h3>
                        <span>Students enrolled</span>
                    </div>
                    
                </div>
                <div style={{marginTop:'35px',display:'flex',justifyContent:'space-between'}}>
                    <div className='shadow-sm' style={{width:'45%',display:'flex',flexDirection:'column',borderRadius:'10px',backgroundColor:'white',padding:'5px 20px',justifyContent:'space-between'}}>
                        <h3>43 lpa</h3>
                        <span>Max Salary</span>
                    </div>
                    <div className='shadow-sm' style={{width:'45%',display:'flex',flexDirection:'column',borderRadius:'10px',backgroundColor:'white',padding:'5px 20px',justifyContent:'space-between'}}>
                        <h3>12.45 lpa</h3>
                        <span>Avearage Salary</span>
                    </div>
                </div>
                <div className="line-chart-monthly-placed shadow" style={{marginTop:'35px',padding:'35px 30px',backgroundColor:'white'}}>
                    <LineChartMonthlyPlaced/>
                </div>
            </div>
            <div className="right-side-statistics" style={{width:'50%'}}>
                <h4 style={{marginLeft:'50px'}}>No. of placed students</h4>
                <CurrentYearPieChart/>
                <BiaxialBarChartCurrentYear/>
            </div>
        </div>
        <div className='top-5-companies-table-container' style={{width:'100%'}}>
            <Top5CompaniesTable/>
        </div>
      </div>
    )
  }
}
