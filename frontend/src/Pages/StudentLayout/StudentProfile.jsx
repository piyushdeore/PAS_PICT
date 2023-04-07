import {useState} from 'react'
import { Button } from 'react-bootstrap'

export default function StudentProfile() {

  const [resumeFile, setResumeFile] = useState(null);
  const [profilePic, setProfilePic] = useState(null);


  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    setResumeFile(file);
  };

  const handleProfilePicUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file instanceof Blob || file instanceof File)) {
      setProfilePic(file);
    } else {
      console.log("Invalid file");
    }
  };

  return (
    <div style={{marginTop:'100px',width:'100%',padding:'20px'}}>
      <div className='shadow' style={{display:'flex',justifyContent:'space-between',height:'350px',borderRadius:'10px'}}>
        <div style={{width:'50%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px'}}>
          <div style={{width:'40%',height:'200px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'10px'}}>
            <div style={{height:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
              {
                profilePic ?
                <img src={URL.createObjectURL(profilePic)} alt="profile" style={{height:'100%',width:'100%'}} />
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
              }
              
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'column',width:'40%'}}>

            <label >Upload profile photo</label>
            <input onChange={handleProfilePicUpload} type='file' />
            <Button
              variant='primary'
              style={{backgroundColor:'white',color:'black',border:'1px solid gray',marginTop:'10px'}}
              onClick = {()=>{setProfilePic(null)}}
            >
              Delete
            </Button>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-around',width:'50%',alignItems:'center',height:'350px',backgroundColor:'rgb(161, 161, 215)'}}>
          {
            resumeFile?
            <embed src={URL.createObjectURL(resumeFile)} type="application/pdf" width="35%" height="300px" />
            :
            <div style={{backgroundColor:'black',marginRight:'50px',width:'35%',height:'300px'}}></div>
          }
          <div style={{display:'flex',flexDirection:'column',width:'40%'}}>

            <label >Upload your resume</label>
            <input onChange={handleResumeUpload} type='file' />
            <Button
              variant='primary'
              style={{backgroundColor:'white',color:'black',border:'1px solid gray',marginTop:'10px'}}
              onClick={()=>{setResumeFile(null)}}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      <Button style={{width:'100%',marginTop:'20px',backgroundColor:'#4839f5'}}>Update Changes</Button>
    </div>
  )
}

