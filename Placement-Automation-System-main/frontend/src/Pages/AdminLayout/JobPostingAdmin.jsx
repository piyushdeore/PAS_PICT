import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CheckBoxAnimated from '../../Components/CheckBoxAnimated'


export default class JobPostingAdmin extends Component {
  
    constructor(){
        super();
        this.state = {
            branches:[false,false,false,false,false,false,],
            offer_type:[false,false,false],
            bond:[false]
        }
    }
  
    handleClick(itr){
        let arr = this.state.branches
        arr[itr] = !arr[itr];
        this.setState({branches:arr})
        // console.log(this.state.branches)
    }
    
    handleClickOffer(itr){
        let arr = this.state.offer_type
        arr[itr] = !arr[itr];
        this.setState({offer_type:arr})
    }

    handleClickBond(itr){
        let arr = this.state.bond
        arr[itr] = !arr[itr];
        this.setState({bond:arr})
    }

    render() {
    return (
      <div style={{display:'flex',flexDirection:'column',width:'100%',alignItems:'center'}}>
        <h2 style={{marginTop:'20px'}}>Job Posting</h2>
        <div style={{width:'80%',display:'flex',marginTop:'50px'}}>
            <h4>Company Details</h4>
        </div>
        <div style={{padding:'20px',width:'80%',marginTop:'20px'}} className="shadow p-3 mb-5 bg-white rounded">
            <Form style={{padding:'20px',width:'100%'}}>
                <div style={{display:'flex'}}>
                    <Form.Group className="mb-3" style={{marginLeft:'10px',width:'50%'}}  controlId="formBasicName">
                        <Form.Label>Company Name<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="Company Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{marginLeft:'10px',width:'50%'}}  controlId="formBasicName">
                        <Form.Label>Company Logo<span > (optional)</span></Form.Label>
                        <Form.Control type="file" placeholder="Company Logo" />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3" style={{marginLeft:'10px',width:'99%'}}  controlId="formBasicName">
                    <Form.Label>Location<span style={{color:'red'}}>*</span></Form.Label>
                    <Form.Control type="text" placeholder="Location" />
                </Form.Group>
            </Form>
            
        </div>
        <div style={{width:'80%',display:'flex',marginTop:'20px'}}>
            <h4>Eligibility</h4>
        </div>
        <div style={{padding:'20px',width:'80%',marginTop:'20px'}} className="shadow p-3 mb-5 bg-white rounded">
            <div style={{marginLeft:'30px',marginTop:'20px'}}>Eligible branches<span style={{color:'red'}}>*</span></div>
            <div style={{display:'flex',justifyContent:'space-between',width:'95%'}}>
                <div style={{display:'flex',height:'50px',alignItems:'center',marginLeft:'30px'}}>
                    <div style={{marginRight:'10px'}}>COMP : </div>
                    <CheckBoxAnimated arr={this.state.branches} itr={0} handleClick={(itr)=>this.handleClick(itr)}/>
                </div>
                <div style={{display:'flex',height:'50px',alignItems:'center',marginLeft:'30px'}}>
                    <div style={{marginRight:'10px'}}>IT : </div>
                    <CheckBoxAnimated arr={this.state.branches} itr={1} handleClick={(itr)=>this.handleClick(itr)}/>
                </div>
                <div style={{display:'flex',height:'50px',alignItems:'center',marginLeft:'30px'}}>
                    <div style={{marginRight:'10px'}}>ENTC : </div>
                    <CheckBoxAnimated arr={this.state.branches} itr={2} handleClick={(itr)=>this.handleClick(itr)}/>
                </div>
                <div style={{display:'flex',height:'50px',alignItems:'center',marginLeft:'30px'}}>
                    <div style={{marginRight:'10px'}}>MECH : </div>
                    <CheckBoxAnimated arr={this.state.branches} itr={3} handleClick={(itr)=>this.handleClick(itr)}/>
                </div>
                <div style={{display:'flex',height:'50px',alignItems:'center',marginLeft:'30px'}}>
                    <div style={{marginRight:'10px'}}>ELEC : </div>
                    <CheckBoxAnimated arr={this.state.branches} itr={4} handleClick={(itr)=>this.handleClick(itr)}/>
                </div>
                <div style={{display:'flex',height:'50px',alignItems:'center',marginLeft:'30px'}}>
                    <div style={{marginRight:'10px'}}>CIVIL : </div>
                    <CheckBoxAnimated arr={this.state.branches} itr={5} handleClick={(itr)=>this.handleClick(itr)}/>
                </div>
            </div>
            <Form style={{padding:'20px',width:'100%'}}>
                <div style={{display:'flex'}}>
                    <Form.Group className="mb-3" style={{marginLeft:'10px',width:'33%'}}  controlId="formBasicName">
                        <Form.Label>SGPA Cutoff<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="SGPA Cutoff" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{marginLeft:'10px',width:'33%'}}  controlId="formBasicName">
                        <Form.Label>10th Cutoff<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="10th Cutoff" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{marginLeft:'10px',width:'34%'}}  controlId="formBasicName">
                        <Form.Label>12th Cutoff<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="12th Cutoff" />
                    </Form.Group>
                </div>
            </Form> 
        </div>
        <div style={{width:'80%',display:'flex',marginTop:'50px'}}>
            <h4>Job Details</h4>
        </div>
        <div style={{padding:'20px',width:'80%',marginTop:'20px'}} className="shadow p-3 mb-5 bg-white rounded">
            <Form style={{padding:'20px',width:'100%'}}>
                <div style={{display:'flex'}}>
                    <Form.Group className="mb-3" style={{marginLeft:'10px',width:'50%'}}  controlId="formBasicName">
                        <Form.Label>Job Role<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="Job Role" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={{marginLeft:'10px',width:'50%'}}  controlId="formBasicName">
                        <Form.Label>Salary<span style={{color:'red'}}>*</span></Form.Label>
                        <Form.Control type="text" placeholder="Salary" />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3" style={{marginLeft:'10px',width:'99%'}}  controlId="formBasicName">
                    <Form.Label>Job Description<span style={{color:'red'}}>*</span></Form.Label>
                    < textarea class="form-control" rows={5} placeholder="Job Description" />
                </Form.Group>
                <div style={{display:'flex',width:'100%',flexDirection:'column'}}>
                    <div style={{marginLeft:'10px'}}>Bond details<span style={{color:'red'}}>*</span></div>
                    
                    <div style={{display:'flex',justifyContent:'space-between',width:'100%',alignItems:'center'}}>

                        <div style={{display:'flex',height:'50px',alignItems:'center',marginLeft:'10px'}}>
                            <div style={{marginRight:'10px'}}>Is there a bond? : </div>
                            <CheckBoxAnimated arr={this.state.bond} itr={0} handleClick={(itr)=>this.handleClickBond(itr)}/>
                        </div>
                        {
                            this.state.bond[0] ? (
                                <Form.Group className="mb-3" style={{marginLeft:'10px',width:'50%'}}  controlId="formBasicName">
                                    <Form.Label>Bond Duration<span style={{color:'red'}}>*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Bond Duration" />
                                </Form.Group>
                            ):(
                                <div></div>
                            )
                        }
                    </div>
                    
                </div>
            </Form>
            <div style={{marginLeft:'30px'}}>Offer Type<span style={{color:'red'}}>*</span></div>
            <div style={{display:'flex',justifyContent:'space-between',width:'60%'}}>
                <div style={{display:'flex',height:'50px',alignItems:'center',marginLeft:'30px'}}>
                    <div style={{marginRight:'10px'}}>Full time : </div>
                    <CheckBoxAnimated arr={this.state.offer_type} itr={0} handleClick={(itr)=>this.handleClickOffer(itr)}/>
                </div>
                <div style={{display:'flex',height:'50px',alignItems:'center',marginLeft:'30px'}}>
                    <div style={{marginRight:'10px'}}>Internship : </div>
                    <CheckBoxAnimated arr={this.state.offer_type} itr={1} handleClick={(itr)=>this.handleClickOffer(itr)}/>
                </div>
                <div style={{display:'flex',height:'50px',alignItems:'center',marginLeft:'30px'}}>
                    <div style={{marginRight:'10px'}}>PPO : </div>
                    <CheckBoxAnimated arr={this.state.offer_type} itr={2} handleClick={(itr)=>this.handleClickOffer(itr)}/>
                </div>
            </div>
        </div>
        <Button variant="primary" style={{backgroundColor:'#E9A630',marginTop:'15px',marginBottom:'20px',border:'none'}} type="submit">
            <Link style={{textDecoration:'none',color:'white'}} to='/student'>submit</Link>
        </Button>
      </div>
    )
  }
}
