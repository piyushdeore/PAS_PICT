import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const JobPostingAdmin = () => {
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const overviewRef = useRef();
  const locationRef = useRef();

  const userLogin = useSelector((state) => state.userLogin);
  const { token: adminToken } = userLogin.user;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const companyId = await createCompany();
    navigate(`../jobrole-posting?companyId=${companyId}`);
  };

  const createCompany = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminToken}`,
      },
    };
    const companyCreationData = {
      name: nameRef.current.value,
      overview: overviewRef.current.value,
      email: emailRef.current.value,
      jobLocation: locationRef.current.value.split(/[,\s]+/),
    };
    console.log("companyCreationData: ", companyCreationData);
    const { data } = await axios.post(
      "/api/companies",
      companyCreationData,
      config
    );
    return data;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <h2 style={{ marginTop: "20px" }}>Job Posting</h2>
      <div style={{ width: "80%", display: "flex", marginTop: "50px" }}>
        <h4>Company Details</h4>
      </div>
      <div
        style={{ padding: "20px", width: "80%", marginTop: "20px" }}
        className="shadow p-3 mb-5 bg-white rounded"
      >
        <Form
          style={{ padding: "20px", width: "100%" }}
          onSubmit={handleSubmit}
        >
          <div style={{ display: "flex" }}>
            <Form.Group
              className="mb-3"
              style={{ marginLeft: "10px", width: "50%" }}
              controlId="formBasicName"
            >
              <Form.Label>
                Company Name<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Company Name"
                name="name"
                ref={nameRef}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ marginLeft: "10px", width: "50%" }}
              controlId="formBasicLogo"
            >
              <Form.Label>
                Company Logo<span> (optional)</span>
              </Form.Label>
              <Form.Control type="file" placeholder="Company Logo" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ marginLeft: "10px", width: "50%" }}
              controlId="formEmail"
            >
              <Form.Label>
                Email<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email address"
                ref={emailRef}
              />
            </Form.Group>
          </div>
          <Form.Group
            className="mb-3"
            style={{ marginLeft: "10px", width: "99%" }}
            controlId="formBasicName"
          >
            <Form.Label>
              Location<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Location"
              ref={locationRef}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{ marginLeft: "10px", width: "99%" }}
            controlId="formBasicName"
          >
            <Form.Label>
              Company Overview<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Company Overview"
              ref={overviewRef}
            />
          </Form.Group>
          <Button
            variant="primary"
            style={{
              backgroundColor: "#E9A630",
              border: "none",
            }}
            type="submit"
          >
            Continue
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default JobPostingAdmin;
