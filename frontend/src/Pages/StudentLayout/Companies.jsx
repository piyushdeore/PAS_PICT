import React, { Component } from 'react'
import CompanyCard from '../../Components/CompanyCard';

import Amazon from '../../assets/company_logo/amazon.svg';
import BNY from '../../assets/company_logo/bny.svg';
import Google from '../../assets/company_logo/google.svg';
import Intuit from '../../assets/company_logo/intuit.svg';
import Nvidia from '../../assets/company_logo/nvidia.svg';
import Phonepe from '../../assets/company_logo/phonepe.svg';
import UBS from '../../assets/company_logo/ubs.svg';
import Microsoft from '../../assets/company_logo/microsoft.svg';
import Adobe from '../../assets/company_logo/adobe.svg';


export default class Companies extends Component {

  render() {
    return (
      <div style={{marginTop:'20px'}} className='companies-page'>
        <h2>Company List</h2>
        <div className='company-card-container' style={{marginTop:'40px',width:'90%'}}>
            <h4>Current Drive</h4>
            <div style={{display:'flex',marginRight:'20px',marginTop:'20px',flexWrap:'wrap'}} className="company-card-container">
                <CompanyCard showButton={true} image={Google} name="Google" />
                <CompanyCard showButton={true} image={UBS} name="UBS"/>
                <CompanyCard showButton={true} image={BNY} name="BNY Mellon"/>
            </div>
        </div>
        
        <div className='company-card-container' style={{marginTop:'40px',width:'90%'}}>
            <h4>Past Drive</h4>
            <div style={{display:'flex', flexWrap:'wrap' ,marginRight:'20px',marginTop:'20px',width:'100%'}} className="company-card-container">
                <CompanyCard image = {Amazon} name="Amazon" showButton={false}/>
                <CompanyCard image = {Phonepe} name="Phonepe" showButton={false}/>
                <CompanyCard image = {Nvidia} name="Nvidia" showButton={false}/>
                <CompanyCard image = {Intuit} name="Intuit" showButton={false}/>
                <CompanyCard image = {Microsoft} name="Microsoft" showButton={false}/>
                <CompanyCard image = {Adobe} name="Adobe" showButton={false}/>
            </div>
        </div>

     </div>
    )
  }
}
