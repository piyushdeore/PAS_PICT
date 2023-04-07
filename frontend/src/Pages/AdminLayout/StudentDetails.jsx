import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentList() {
  const [students, setStudents] = useState([]);


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userLogin")).token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

  
    axios
      .get("/api/students", config)
      .then((res) => setStudents(res.data))
      .catch((err) => {
        if (err.response.status === 401) {
          console.log("Unauthorized");
        } else {
          console.error(err);
        }
      });
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>{student.name.firstName}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
