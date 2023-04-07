import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Google from '../../assets/company_logo/google.svg';
import CompanyCard from '../../Components/CompanyCard';


function JobDetailsEdit() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userLogin")).token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("/api/jobs", config)
      .then((res) => setJobs(res.data))
      .catch((err) => {
        if (err.response.status === 401) {
          console.log("Unauthorized");
        } else {
          console.error(err);
        }
      });
  }, []);

  return (
    <div style={{marginTop:'30px',width:'100%'}}>
      <h2>Job List</h2>
      <div style={{width:'100%',display:'flex',flexWrap:'wrap'}}>
        <div style={{display:'flex',marginRight:'20px',marginTop:'20px',flexWrap:'wrap'}} className="company-card-container">
          {jobs.map((job) => (
            <CompanyCard key={job._id} showButton={true} image={Google} name={job.company.name} />
          ))}      
        </div>
      </div>
      
    </div>
  );
}

export default JobDetailsEdit;
