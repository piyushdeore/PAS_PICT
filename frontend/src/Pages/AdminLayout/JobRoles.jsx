import { Button } from "@mui/material";
import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";

import CheckBoxAnimated from "../../Components/CheckBoxAnimated";

import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const JobRoles = (props) => {
  const branchesValues = ["COMP", "IT", "ENTC", "MECH", "ELEC", "CIVIL"];
  const offerTypeValues = ["FULL_TIME", "INTERNSHIP", "PPO"];

  const userLogin = useSelector((state) => state.userLogin);
  const { token: adminToken } = userLogin.user;

  const [branches, setBranches] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [offerType, setOfferType] = useState([false, false, false]);
  const [bond, setBond] = useState([false]);
  const [yearDownAllowed, setYearDownAllowed] = useState([false]);

  const todaysDate = new Date();

  const [dateOfTest, setDateOfTest] = useState({
    dd: parseInt(String(todaysDate.getDate()).padStart(2, "0")),
    mm: parseInt(String(todaysDate.getMonth() + 1).padStart(2, "0")),
    yyyy: todaysDate.getFullYear(),
  });

  // Refs
  const jobRoleRef = useRef();
  const salaryRef = useRef();
  const jobDescriptionRef = useRef();
  const jobBondDurationRef = useRef();
  // Eligibility refs
  const cgpaRef = useRef();
  const tenthRef = useRef();
  const twelthRef = useRef();
  const activeBacklogsRef = useRef();
  const passiveBacklogsRef = useRef();

  // For query string params
  const [searchParams] = useSearchParams();

  const handleClick = (itr) => {
    const arr = [...branches];
    arr[itr] = !arr[itr];
    setBranches(arr);
  };

  const handleClickOffer = (itr) => {
    const arr = [...offerType];
    arr[itr] = !arr[itr];
    setOfferType(arr);
  };

  const handleClickBond = (itr) => {
    const arr = [...bond];
    arr[itr] = !arr[itr];
    setBond(arr);
  };

  const handleClickYearDownAllowed = (itr) => {
    const arr = [...yearDownAllowed];
    arr[itr] = !arr[itr];
    setYearDownAllowed(arr);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createJob();
  };

  const createJob = async () => {
    const jobCreationData = {
      company: searchParams.get("companyId"),
      jobRole: jobRoleRef.current.value,
      compensation: salaryRef.current.value,
      jobDescription: jobDescriptionRef.current.value,
      testDay: new Date(dateOfTest.yyyy, dateOfTest.mm - 1, dateOfTest.dd),
      eligibility: {
        tenth: tenthRef.current.value,
        twelth: twelthRef.current.value,
        cgpa: cgpaRef.current.value,
        activeBacklogsAllowed: activeBacklogsRef.current.value,
        passiveBacklogsAllowed: passiveBacklogsRef.current.value,
        yeardownAllowed: yearDownAllowed[0],
        branchesAllowed: branchesValues.filter((branch, idx) => branches[idx]),
      },
    };
    if (bond[0]) {
      jobCreationData.bondDurationMonths = jobBondDurationRef.current.value;
    }
    jobCreationData.offerType = offerTypeValues.reduce((acc, curr, idx) => {
      let concat = acc;
      if (offerType[idx]) {
        concat = concat + curr;
        if (idx !== 2) {
          concat = concat + " ";
        }
      }
      return concat;
    }, "");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminToken}`,
      },
    };
    const { data } = await axios.post("/api/jobs", jobCreationData, config);
    return data;
  };
  return (
    <>
      <div style={{ width: "80%", display: "flex", marginTop: "50px" }}>
        <h4>Job Details {props.roleNumber}</h4>
      </div>
      <div
        style={{ padding: "20px", width: "80%", marginTop: "20px" }}
        className="shadow p-3 mb-5 bg-white rounded"
      >
        <Form style={{ padding: "20px", width: "100%" }}>
          <div style={{ display: "flex" }}>
            <Form.Group
              className="mb-3"
              style={{ marginLeft: "10px", width: "50%" }}
              controlId="formBasicName"
            >
              <Form.Label>
                Job Role<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Job Role"
                ref={jobRoleRef}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ marginLeft: "10px", width: "50%" }}
              controlId="formBasicName"
            >
              <Form.Label>
                Salary<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Salary" ref={salaryRef} />
            </Form.Group>
          </div>
          <Form.Group
            className="mb-3"
            style={{ marginLeft: "10px", width: "99%" }}
            controlId="formBasicName"
          >
            <Form.Label>
              Job Description<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Job Description"
              ref={jobDescriptionRef}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{ marginLeft: "10px", width: "50%" }}
            controlId="formBasicName"
          >
            <Form.Label>
              Date of visit<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <div style={{ width: "100%", display: "flex" }}>
              <Form.Control
                name="dd"
                style={{ width: "32%" }}
                type="number"
                min={1}
                max={31}
                placeholder="DD"
                value={dateOfTest.dd}
                onChange={(e) =>
                  setDateOfTest((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Form.Control
                name="mm"
                style={{ width: "32%", marginLeft: "10px" }}
                type="number"
                placeholder="MM"
                min={1}
                max={12}
                value={dateOfTest.mm}
                onChange={(e) =>
                  setDateOfTest((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Form.Control
                name="yyyy"
                style={{ width: "32%", marginLeft: "10px" }}
                type="number"
                placeholder="YYYY"
                min={2000}
                value={dateOfTest.yyyy}
                onChange={(e) =>
                  setDateOfTest((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
            </div>
          </Form.Group>
          <div
            style={{ display: "flex", width: "100%", flexDirection: "column" }}
          >
            <div style={{ marginLeft: "10px" }}>
              Bond details<span style={{ color: "red" }}>*</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "50px",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                <div style={{ marginRight: "10px" }}>Is there a bond? : </div>
                <CheckBoxAnimated
                  arr={bond}
                  itr={0}
                  handleClick={(itr) => handleClickBond(itr)}
                />
              </div>
              {bond[0] ? (
                <Form.Group
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Bond Duration (in months)
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Bond Duration"
                    min={1}
                    ref={jobBondDurationRef}
                  />
                </Form.Group>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </Form>
        <div style={{ marginLeft: "30px" }}>
          Offer Type<span style={{ color: "red" }}>*</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "50px",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <div style={{ marginRight: "10px" }}>Full time : </div>
            <CheckBoxAnimated
              arr={offerType}
              itr={0}
              handleClick={(itr) => handleClickOffer(itr)}
            />
          </div>
          <div
            style={{
              display: "flex",
              height: "50px",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <div style={{ marginRight: "10px" }}>Internship : </div>
            <CheckBoxAnimated
              arr={offerType}
              itr={1}
              handleClick={(itr) => handleClickOffer(itr)}
            />
          </div>
          <div
            style={{
              display: "flex",
              height: "50px",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <div style={{ marginRight: "10px" }}>PPO : </div>
            <CheckBoxAnimated
              arr={offerType}
              itr={2}
              handleClick={(itr) => handleClickOffer(itr)}
            />
          </div>
        </div>
      </div>
      <div style={{ width: "80%", display: "flex", marginTop: "20px" }}>
        <h4>Eligibility for Job {props.roleNumber}</h4>
      </div>
      <div
        style={{ padding: "20px", width: "80%", marginTop: "20px" }}
        className="shadow p-3 mb-5 bg-white rounded"
      >
        <div style={{ marginLeft: "30px", marginTop: "20px" }}>
          Eligible branches<span style={{ color: "red" }}>*</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "95%",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "50px",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <div style={{ marginRight: "10px" }}>COMP : </div>
            <CheckBoxAnimated
              arr={branches}
              itr={0}
              handleClick={(itr) => handleClick(itr)}
            />
          </div>
          <div
            style={{
              display: "flex",
              height: "50px",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <div style={{ marginRight: "10px" }}>IT : </div>
            <CheckBoxAnimated
              arr={branches}
              itr={1}
              handleClick={(itr) => handleClick(itr)}
            />
          </div>
          <div
            style={{
              display: "flex",
              height: "50px",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <div style={{ marginRight: "10px" }}>ENTC : </div>
            <CheckBoxAnimated
              arr={branches}
              itr={2}
              handleClick={(itr) => handleClick(itr)}
            />
          </div>
          <div
            style={{
              display: "flex",
              height: "50px",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <div style={{ marginRight: "10px" }}>MECH : </div>
            <CheckBoxAnimated
              arr={branches}
              itr={3}
              handleClick={(itr) => handleClick(itr)}
            />
          </div>
          <div
            style={{
              display: "flex",
              height: "50px",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <div style={{ marginRight: "10px" }}>ELEC : </div>
            <CheckBoxAnimated
              arr={branches}
              itr={4}
              handleClick={(itr) => handleClick(itr)}
            />
          </div>
          <div
            style={{
              display: "flex",
              height: "50px",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <div style={{ marginRight: "10px" }}>CIVIL : </div>
            <CheckBoxAnimated
              arr={branches}
              itr={5}
              handleClick={(itr) => handleClick(itr)}
            />
          </div>
        </div>
        <Form style={{ padding: "20px", width: "100%" }}>
          <div style={{ display: "flex" }}>
            <Form.Group
              className="mb-3"
              style={{ marginLeft: "10px", width: "33%" }}
              controlId="formBasicName"
            >
              <Form.Label>
                SGPA Cutoff<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="SGPA Cutoff"
                ref={cgpaRef}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ marginLeft: "10px", width: "33%" }}
              controlId="formBasicName"
            >
              <Form.Label>
                10th Cutoff<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="10th Cutoff"
                ref={tenthRef}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ marginLeft: "10px", width: "34%" }}
              controlId="formBasicName"
            >
              <Form.Label>
                12th Cutoff<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="12th Cutoff"
                ref={twelthRef}
              />
            </Form.Group>
          </div>
          <div style={{ display: "flex" }}>
            <Form.Group
              className="mb-3"
              style={{ marginLeft: "10px ", width: "33%" }}
              controlId="formBasicName"
            >
              <Form.Label>
                Active Backlogs allowed<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Active Backlogs"
                min={0}
                ref={activeBacklogsRef}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ margin: "0 10px", width: "33%" }}
              controlId="formBasicName"
            >
              <Form.Label>
                Passive Backlogs allowed<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Passive Backlogs"
                min={0}
                ref={passiveBacklogsRef}
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              style={{ marginLeft: "10px", width: "50%" }}
              controlId="formBasicName"
            >
              <Form.Label>
                Year down allowed<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control type="boolean" placeholder="Year down" />
            </Form.Group> */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckBoxAnimated
                arr={yearDownAllowed}
                itr={0}
                handleClick={(itr) => handleClickYearDownAllowed(itr)}
              />
              <span style={{ margin: "10px" }}>Year down allowed</span>
            </div>
          </div>
        </Form>
      </div>
      <Button
        variant="primary"
        style={{
          backgroundColor: "#7eff21",
          border: "none",
        }}
        onClick={handleSubmit}
      >
        Create Job
      </Button>
    </>
  );
};

export default JobRoles;
