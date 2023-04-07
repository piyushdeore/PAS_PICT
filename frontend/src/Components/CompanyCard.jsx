import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './CompanyCard.css';
import Modal from 'react-bootstrap/Modal';

export default class CompanyCard extends Component {

  constructor(props){
    super(props);

    this.state={
      show:false
    }
  }


  render() {
    return (
      <div className='company-card'  style={{width:'25%',marginBottom:'10px',marginLeft:'10px',marginTop:'10px',marginRight:'30px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Button className=' shadow' onClick={()=> this.setState({show:true})} style={{width:'100%',height:'300px',backgroundColor:'white',color:'black'}}>
            <img className='card-image' style={{width:'100%',height:'100%'}} src={this.props.image} alt="company"></img> 
        </Button>
        <div style={{fontWeight:'bold',textAlign:'start',marginTop:'10px',color:'black'}}>{this.props.name}</div>
        {
          (this.props.showButton)?
            <div style={{}}>
              <Button variant="primary" style={{backgroundColor:'#4839f5',marginTop:'20px'}} type="submit">
                    Apply
              </Button>
            </div>
          :<div></div>
        }
        

        <Modal show={this.state.show} fullscreen={true} onHide={() => this.setState({show:false})}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <br/>
            <h4>Minimum qualification:</h4>
            <ul>
              <li>Experience with software development in one or more programming languages (e.g., Python, C, C++, Java, JavaScript).</li>
              <li>Experience with data structures or algorithms.</li>
            </ul>
            <h4>Preferred qualifications:</h4>
            <ul>
              <li>Experience with front-end frameworks, full-stack development, and/or API development.</li>
              <li>Experience developing accessible technologies.</li>
            </ul>
            <br/>
            <hr/>
            <h3>About the job</h3>
            <br/>
            <p>
            {this.props.name}'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We're looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design, networking and data storage, security, artificial intelligence, natural language processing, UI design and mobile; the list goes on and is growing every day. As a software engineer, you will work on a specific project critical to {this.props.name}’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.
            </p>
            <p>
            With your technical expertise you will manage project priorities, deadlines, and deliverables. You will design, develop, test, deploy, maintain, and enhance software solutions.
            </p>
            <p>
            {this.props.name} has always been about the democratization of information. We’re extending that ethos to the world of E-Commerce, supporting an open ecosystem of buyers and sellers across online and offline businesses. With over one billion shopping sessions happening per day on {this.props.name}, we’re creating new innovative shopping and selling experiences that leverage {this.props.name}’s Shopping Graph: a comprehensive, AI-enhanced model that understands products, sellers, brands, and reviews and how those attributes relate to one another and the product information and inventory data we receive from brands and retailers directly.
            </p>
            <br/>
            <hr/>
            <h3>Responsibilities</h3>
            <br/>
            <ul>
              <li>
              Write product or system development code.
              </li>
              <li>Participate in, or lead design reviews with peers and stakeholders to decide amongst available technologies.</li>
              <li>Review code developed by other developers and provide feedback to ensure best practices (e.g., style guidelines, checking code in, accuracy, testability, and efficiency).</li>
              <li>Contribute to existing documentation or educational content and adapt content based on product/program updates and user feedback.</li>
              <li>Triage product or system issues and debug/track/resolve by analyzing the sources of issues and the impact on hardware, network, or service operations and quality.</li>
            </ul>
          </Modal.Body>
        </Modal>
        
        {/* <Button>Apply</Button> */}
      </div>
    )
  }
}
