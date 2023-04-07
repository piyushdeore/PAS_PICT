import React, { Component } from 'react'
import Interview from '../../assets/interview.svg';
import { motion } from 'framer-motion';
import Google from '../../assets/company_logo/google.svg'
import Phonepe from '../../assets/company_logo/phonepe.svg'
import Bny from '../../assets/company_logo/bny.svg'
import Adobe from '../../assets/company_logo/adobe.svg'
import Microsoft from '../../assets/company_logo/microsoft.svg'
import AOS from 'aos';
import "aos/dist/aos.css";

import CompanyCardsOnLanding from '../../Components/CompanyCardsOnLanding';
import './Landing.css';
import AllYearPlacments from '../../Components/SimpleLineChartAllYearPlacements'
import PieChart2022 from '../../Components/PieChart2022'
import PieChart2021 from '../../Components/PieChart2021'
import BranchWisePlacement2022 from '../../Components/SimpleBarChartBranchWise2022'
import BranchWisePlacement2021 from '../../Components/SimpleBarChartBranchWise2021'
import BranchWisePlacement2020 from '../../Components/SimpleBarChartBranchWise2020'
import BranchWisePlacement2019 from '../../Components/SimpleBarChartBranchWise2019'
import StackedAreaChart2022 from '../../Components/StackedAreaChart2022'
import TinyLineChartUnplaced from '../../Components/TinyLineChartUnplaced'

import InstagramLogo from '../../assets/instagram.webp'
import TwitterLogo from '../../assets/twitter.webp'
import YouTubeLogo from '../../assets/youtube.svg'
import LinkedinLogo from '../../assets/linkedin.svg'
import { Link } from 'react-router-dom';
import Avatar1 from '../../assets/Avatars/avatar1.svg'
import Avatar2 from '../../assets/Avatars/avatar2.svg'
import Avatar3 from '../../assets/Avatars/avatar3.svg'
import Avatar4 from '../../assets/Avatars/avatar4.svg'
import Avatar5 from '../../assets/Avatars/avatar5.svg'
import Avatar6 from '../../assets/Avatars/avatar6.svg'
import Avatar7 from '../../assets/Avatars/avatar7.svg'
import Avatar8 from '../../assets/Avatars/avatar8.svg'
import Avatar9 from '../../assets/Avatars/avatar9.svg'



const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export default class Landing extends Component {

  componentDidMount(){
    AOS.init({duration:2000});
  }

  render() {

    return (
      <div style={{width:'100%',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        
        <div data-aos='fade-right' style={{ padding:'20px' ,display:'flex',alignItems:'center' ,width:'80%',backgroundColor:'rgb(161, 161, 215)',height:'500px',marginTop:'40px',borderRadius:'5px'}}>
          <div style={{width:'40%',height:'100%', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
              <motion.h1 initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 0.8,
        // delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
              }} 
                style={{color:'white'}}
              >Placement Automation</motion.h1>
              <br/>
              <motion.h1 initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  duration: 0.8,
        // delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
              }}
                style={{color:'white'}}
              >System</motion.h1>
            </div>
            <br/>
            <motion.div 
              initial={{x:-300,y:0}} 
              animate={{x:0,y:0}}
              style={{width:'75%'}}>
              <p style={{textAlign:'center',fontWeight:'bold',color:'white'}}>
              Controlls college placment activites and generate
              Reports quickly and efficiently
              </p>
            </motion.div>
          </div>
          <div style={{width:'60%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <motion.img
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{
               duration: 0.8,
               delay: 0.5,
               ease: [0, 0.71, 0.2, 1.01]
             }}
             style={{height:'90%',width:'90%'}} src={Interview} alt="interview" />
          </div>
        </div>
        <div style={{marginTop:'80px', marginBottom:'100px' ,backgroundColor:'white',width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <div style={{width:'80%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <h2 style={{marginTop:'20px',fontWeight:'bold'}}>Top Companies Visited</h2>
              <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',width:'100%',padding:'30px 10px'}}>
                <CompanyCardsOnLanding name="Google" logo={Google} />
                <CompanyCardsOnLanding name="Phonepe" logo={Phonepe} />
                <CompanyCardsOnLanding name="Adobe" logo={Adobe} />
                <CompanyCardsOnLanding name="Microsoft" logo={Microsoft} />
                <CompanyCardsOnLanding name="BNY Mellon" logo={Bny} />
              </div>
            </div>
        </div>
        <div style={{width:'80%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
             <h2 style={{marginTop:'30px',fontWeight:'bold'}}>Some of our students in top MNCs</h2>
             <div className='slider' style={{height:'250px',margin:'20px 0 100px 0',position:'relative',width:'90%',display:'grid',placeItems:'center',overflow:'hidden'}}>
                <div className='slide-track' style={{display:'flex',paddingBottom:'20px'}}>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar1} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar7} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar8} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar2} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar3} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar4} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar9} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar5} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>

                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar6} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  


                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar1} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar7} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar8} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar2} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar3} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar4} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar9} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>
                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar5} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>

                  <div className='slide card shadow' style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',height:'150px',width:'150px',margin:'30px',backgroundColor:'rgb(220, 220, 248)'}}>
                    <div style={{height:'70px',width:'70px',borderRadius:'50%'}}>
                      <img style={{height:'100%',width:'100%'}} src={Avatar6} alt='avatar1' />
                    </div>
                    <div>Google</div>
                  </div>

                </div>
             </div>
        </div>
        <div style={{backgroundColor:'white',width:'100%',padding:'20px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <div style={{width:'80%',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
              <h2 style={{marginTop:'20px',fontWeight:'bold'}}>Placements Statistics</h2>
              <h3 style={{marginTop:'50px',fontWeight:'lighter'}}>2021-2022 Batch Success</h3>
              <div style={{width:'100%',padding:'20px',marginTop:'20px',display:'flex',justifyContent:'space-around'}}>
                  <div  style={{width:'20%',boxShadow:'0 10px 15px 0 rgba(66, 133, 244,.18), 0 20px 20px 0 rgba(66, 133, 244,.15)',color:'white',display:'flex',flexDirection:'column',borderRadius:'10px',backgroundColor:'#4839f5',padding:'5px 20px',justifyContent:'space-between'}}>
                      <h3>1398</h3>
                      <span>Students placed</span>
                  </div>
                  <div  style={{width:'20%',boxShadow:'0 10px 15px 0 rgba(66, 133, 244,.18), 0 20px 20px 0 rgba(66, 133, 244,.15)',color:'white',display:'flex',flexDirection:'column',borderRadius:'10px',backgroundColor:'#4839f5',padding:'5px 20px',justifyContent:'space-between'}}>
                      <h3>1425</h3>
                      <span>Students enrolled</span>
                  </div>
                  <div  style={{width:'20%',boxShadow:'0 10px 15px 0 rgba(233,166,48,.18), 0 20px 20px 0 rgba(233,166,48,.15)',color:'white',display:'flex',flexDirection:'column',borderRadius:'10px',backgroundColor:'#E9A630',padding:'5px 20px',justifyContent:'space-between'}}>
                      <h3>52 lpa</h3>
                      <span>Max Salary</span>
                  </div>
                  <div  style={{width:'20%',boxShadow:'0 10px 15px 0 rgba(233,166,48,.18), 0 20px 20px 0 rgba(233,166,48,.15)',color:'white',display:'flex',flexDirection:'column',borderRadius:'10px',backgroundColor:'#E9A630',padding:'5px 20px',justifyContent:'space-between'}}>
                      <h3>11.50 lpa</h3>
                      <span>Avearage Salary</span>
                  </div>
              </div>
              <div data-aos='fade-right' style={{width:'100%',padding:'20px',marginTop:'20px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                <h3 style={{marginTop:'50px',fontWeight:'lighter'}}>How's it going year by year</h3>
                <div style={{marginTop:'20px',padding:'20px',width:'100%',height:'500px'}}>
                  <AllYearPlacments />
                </div>
              </div>
              <div data-aos='fade-right' style={{width:'100%',padding:'20px',marginTop:'20px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                <h3 style={{marginTop:'50px',fontWeight:'lighter'}}>Last two years comparison</h3>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center' ,marginTop:'20px',padding:'20px',width:'100%',height:'400px'}}>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'45%'}}>
                    <h5 style={{fontWeight:'lighter',margin:'20px 0'}}>Year 2021-22</h5>
                    <PieChart2022/>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'45%'}}>
                    <h5 style={{fontWeight:'lighter',margin:'20px 0'}}>Year 2020-21</h5>
                    <PieChart2021/>
                  </div>
                </div>
              </div>
              <div data-aos='fade-right' style={{width:'100%',padding:'20px',marginTop:'20px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                <h3 style={{marginTop:'50px',fontWeight:'lighter'}}>Total placed out off total register per year</h3>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center' ,marginTop:'20px',padding:'20px',width:'100%',height:'700px',flexWrap:'wrap'}}>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'50%',height:'50%'}}>
                    <h5 style={{fontWeight:'lighter',margin:'20px 0'}}>Year 2021-22</h5>
                    <BranchWisePlacement2022/>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'50%',height:'50%'}}>
                    <h5 style={{fontWeight:'lighter',margin:'20px 0'}}>Year 2020-21</h5>
                    <BranchWisePlacement2021/>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'50%',height:'50%'}}>
                    <h5 style={{fontWeight:'lighter',margin:'20px 0'}}>Year 2019-20</h5>
                    <BranchWisePlacement2020/>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'50%',height:'50%'}}>
                    <h5 style={{fontWeight:'lighter',margin:'20px 0'}}>Year 2018-19</h5>
                    <BranchWisePlacement2019/>
                  </div>
                </div>
              </div>
              <div data-aos='fade-right' style={{width:'100%',height:'500px',padding:'50px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <h3 style={{marginTop:'50px',fontWeight:'lighter'}}>Branch wise placements of last two years</h3>
                <div style={{marginTop:'50px',display:'flex',justifyContent:'space-around',width:'100%',alignItems:'center',height:'100%'}}>
                  <StackedAreaChart2022/>
                  {/* <StackedAreaChart2022/> */}
                </div>
              </div>
              <div data-aos='fade-right' style={{width:'100%',height:'500px',padding:'50px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <h3 style={{marginTop:'50px',fontWeight:'lighter'}}>Unplaced rate is decreasing per year</h3>
                <div style={{marginTop:'50px',display:'flex',justifyContent:'space-around',width:'100%',alignItems:'center',height:'100%'}}>
                  <TinyLineChartUnplaced/>
                  {/* <StackedAreaChart2022/> */}
                </div>
              </div>
            </div>
        </div>
        <div style={{color:'white',width:'100%',backgroundColor:'black',height:'500px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'20px'}}>
            <div style={{width:'80%',height:'75%',display:'flex',marginTop:'40px'}}>
              <div style={{width:'10%',height:'100%'}}>
                <h1 style={{fontWeight:'bold',color:'white',fontWeight:'bolder'}}>PAS</h1> 
              </div>
              <div style={{width:'90%',height:'100%',display:'flex',justifyContent:'space-around'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                  <h6 style={{fontWeight:'bold'}}>Student Portal</h6>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Login</h6>
                  </Link>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Create Account</h6>

                  </Link>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Profile</h6>

                  </Link>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Student Form</h6>
                    
                  </Link>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Company List</h6>
                  </Link>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Track Application</h6>
                  </Link>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Statistics</h6>
                  </Link>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                  <h6 style={{fontWeight:'bold'}}>Admin Portal</h6>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Login</h6>
                  </Link>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Create Account</h6>

                  </Link>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Profile</h6>

                  </Link>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Student Form</h6>
                  </Link>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Company List</h6>
                  </Link>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Track Application</h6>
                  </Link>
                  <Link style={{color:'white'}} to='/'>
                    <h6 style={{fontWeight:'lighter'}}>Statistics</h6>
                  </Link>
                </div>
              </div>
            </div>

            <div style={{width:'80%',height:'25%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
              <h3>Follow Us</h3>
              <div style={{width:'25%',height:'50%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                <div style={{width:'10%',height:'60%'}}>
                  <img style={{height:'80%',width:'80%'}} src={InstagramLogo} alt="instagram" />
                </div>
                <div style={{width:'10%',height:'60%'}}>
                  <img style={{height:'80%',width:'90%'}} src={TwitterLogo} alt="instagram" />

                </div>
                <div style={{width:'10%',height:'60%'}}>
                  <img style={{height:'100%',width:'90%'}} src={YouTubeLogo} alt="instagram" />

                </div>
                <div style={{width:'10%',height:'60%'}}>
                  <img style={{height:'100%',width:'100%'}} src={LinkedinLogo} alt="instagram" />

                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
