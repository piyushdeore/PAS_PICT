import React, { Component } from 'react'

export default class Top5CompaniesTable extends Component {
  render() {
    return (
        <div style={{marginTop:'30px',marginBottom:'20px'}}>
            <h4>Top 5 companies visited</h4>
            <br/>
            <div className='top-5-companies-table shadow' style={{backgroundColor:'white',padding:'20px',width:'95%'}}>
                <table style={{borderCollapse:'collapse',width:'100%'}}>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Company</th>
                        <th>Comp</th>
                        <th>IT</th>
                        <th>ENTC</th>
                        <th>MECH</th>
                        <th>ELE</th>
                        <th>CIVIL</th>
                        <th>Male</th>
                        <th>Female</th>
                        <th>Sal. LPA</th>
                        <th>Total Sal LPA</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Amazon</td>
                        <td>4</td>
                        <td>2</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>3</td>
                        <td>4</td>
                        <td>43</td>
                        <td>301</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Codenation</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                        <td>37</td>
                        <td>37</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Phonepay</td>
                        <td>1</td>
                        <td>3</td>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                        <td>5</td>
                        <td>1</td>
                        <td>33</td>
                        <td>198</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Intuit</td>
                        <td>2</td>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>3</td>
                        <td>30</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Nvidia</td>
                        <td>0</td>
                        <td>2</td>
                        <td>3</td>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                        <td>3</td>
                        <td>3</td>
                        <td>28</td>
                        <td>168</td>
                    </tr>
                </table>
            </div>
        </div>
        
    )
  }
}
