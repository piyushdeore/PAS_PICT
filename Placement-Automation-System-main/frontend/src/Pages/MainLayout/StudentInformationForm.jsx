import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default class StudentInformationForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      alternateEmail: "",
      mobileNumber: 0,
      birthDate: 0,
      birthMonth: 0,
      birthYear: 0,
      male: 1,
      female: 0,
      adharNumber: 0,
      panNumber: "",
      collegeRegisterNumber: "",
      prnNumber: "",
      branch: "hello",
      class: "",
      division: 0,
      rollNumber: 0,
      flatNumber: "",
      street: "",
      area: "",
      city: "",
      pincode: 0,
      district: "",
      state: "",
      flatNumberTemp: "",
      streetTemp: "",
      areaTemp: "",
      cityTemp: "",
      pincodeTemp: 0,
      districtTemp: "",
      stateTemp: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    console.log("Hello");
  }

  render() {
    return (
      <div>
        {/* // -------------------------------------------------- personal details -------------------------------------------------------------------------- */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "80%", display: "flex", marginTop: "30px" }}>
            <h4>Personal Details</h4>
          </div>

          {/* <br/> */}
          <div
            style={{ padding: "20px", width: "80%", marginTop: "20px" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Form style={{ padding: "20px", width: "100%" }}>
              <div style={{ display: "flex" }}>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "33%" }}
                  controlId="ControlFirstName"
                >
                  <Form.Label>
                    First Name<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "33%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Middle Name<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="middleName"
                    type="text"
                    placeholder="Middle Name"
                  />
                </Form.Group>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "34%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Last Name<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                </Form.Group>
              </div>
              <Form.Group
                onChange={(event) => {
                  this.setState({ [event.target.name]: event.target.value });
                }}
                className="mb-3"
                style={{ marginLeft: "10px", width: "99%" }}
                controlId="formBasicName"
              >
                <Form.Label>
                  Email<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="Email address"
                />
              </Form.Group>
              <Form.Group
                onChange={(event) => {
                  this.setState({ [event.target.name]: event.target.value });
                }}
                className="mb-3"
                style={{ marginLeft: "10px", width: "99%" }}
                controlId="formBasicName"
              >
                <Form.Label>Alternate email</Form.Label>
                <Form.Control
                  name="alternateEmail"
                  type="text"
                  placeholder="Alternate email address"
                />
              </Form.Group>
              <Form.Group
                onChange={(event) => {
                  this.setState({ [event.target.name]: event.target.value });
                }}
                className="mb-3"
                style={{ marginLeft: "10px", width: "99%" }}
                controlId="formBasicName"
              >
                <Form.Label>
                  Whatsapp mobile no.<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  name="mobileNumber"
                  type="number"
                  placeholder="Whatsapp mobile no."
                />
              </Form.Group>
              <div style={{ display: "flex" }}>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Date of birth<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <div style={{ width: "100%", display: "flex" }}>
                    <Form.Control
                      name="birthDate"
                      style={{ width: "32%" }}
                      type="number"
                      placeholder="DD"
                    />
                    <Form.Control
                      name="birthMonth"
                      style={{ width: "32%", marginLeft: "10px" }}
                      type="number"
                      placeholder="MM"
                    />
                    <Form.Control
                      name="birthYear"
                      style={{ width: "32%", marginLeft: "10px" }}
                      type="number"
                      placeholder="YYYY"
                    />
                  </div>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  style={{ marginLeft: "30px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Gender<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <div style={{ display: "flex", marginBottom: "20px" }}>
                    <div class="form-check">
                      <input
                        onClick={() => {
                          this.setState({ male: 1, female: 0 });
                        }}
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={()=>{}}
                        checked={this.state.male ? true : false}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Male
                      </label>
                    </div>
                    <div style={{ marginLeft: "20px" }} class="form-check">
                      <input
                        onClick={() => {
                          this.setState({ male: 0, female: 1 });
                        }}
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        onChange={()=>{}}
                        checked={this.state.female ? true : false}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Female
                      </label>
                    </div>
                  </div>
                </Form.Group>
              </div>
              <div style={{ display: "flex", width: "100%" }}>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Aadhar no.<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="adharNumber"
                    type="number"
                    placeholder="Aadhar no."
                  />
                </Form.Group>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    PAN card no.<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="panNumber"
                    type="text"
                    placeholder="PAN card no."
                  />
                </Form.Group>
              </div>
              <div style={{ display: "flex", width: "100%" }}>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    College Registration no.
                    <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="collegeRegisterNumber"
                    type="text"
                    placeholder="Registration no."
                  />
                </Form.Group>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    PRN no.<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="prnNumber"
                    type="text"
                    placeholder="PRN no."
                  />
                </Form.Group>
              </div>
              <div style={{ display: "flex", width: "100%" }}>
                <Form.Group
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Branch<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select
                    name="branch"
                    onChange={(event) => {
                      this.setState({
                        [event.target.name]: event.target.value,
                      });
                    }}
                  >
                    <option> -- Select Branch -- </option>
                    <option value="COMP">COMP</option>
                    <option value="IT">IT</option>
                    <option value="ENTC">ENTC</option>
                    <option value="MECH">MECH</option>
                    <option value="ELE">ELE</option>
                    <option value="CIVIL">CIVIL</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Class<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Select
                    name="class"
                    onChange={(event) => {
                      this.setState({
                        [event.target.name]: event.target.value,
                      });
                    }}
                  >
                    <option> -- Select class -- </option>
                    <option value="1">Third Year</option>
                    <option value="2">Fourth Year</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div style={{ display: "flex", width: "100%" }}>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Division<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="division"
                    type="number"
                    placeholder="Division"
                  />
                </Form.Group>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Roll no.<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="rollNumber"
                    type="number"
                    placeholder="Roll no."
                  />
                </Form.Group>
              </div>
            </Form>
          </div>

          {/* // -------------------------------------------------- Permanent Address details -------------------------------------------------------------------------- */}

          <div style={{ width: "80%", display: "flex", marginTop: "30px" }}>
            <h4>Permanent Address Details</h4>
          </div>

          <div
            style={{ padding: "20px", width: "80%", marginTop: "20px" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Form style={{ padding: "20px", width: "100%" }}>
              <div style={{ display: "flex", width: "100%" }}>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "30%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Flat/ Plot no.<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="flatNumber"
                    type="text"
                    placeholder="Flat/ Plot no."
                  />
                </Form.Group>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "70%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Street / Colony<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="street"
                    type="text"
                    placeholder="Street / Colony"
                  />
                </Form.Group>
              </div>
              <div style={{ display: "flex", width: "100%" }}>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Area<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control name="area" type="text" placeholder="Area" />
                </Form.Group>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    City/ Town<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="city"
                    type="text"
                    placeholder="City/ Town"
                  />
                </Form.Group>
              </div>
              <div style={{ display: "flex" }}>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "33%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Pincode<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="pincode"
                    type="number"
                    placeholder="Pincode"
                  />
                </Form.Group>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "33%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    District<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="district"
                    type="text"
                    placeholder="District"
                  />
                </Form.Group>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "34%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    State<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control name="state" type="text" placeholder="State" />
                </Form.Group>
              </div>
            </Form>
          </div>

          {/* // -------------------------------------------------- Temporary Address details -------------------------------------------------------------------------- */}

          <div style={{ width: "80%", display: "flex", marginTop: "30px" }}>
            <h4>Temporary Address Details</h4>
          </div>

          <div
            style={{ padding: "20px", width: "80%", marginTop: "20px" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Form style={{ padding: "20px", width: "100%" }}>
              <div style={{ display: "flex", width: "100%" }}>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "30%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Flat/ Plot no.<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="flatNumberTemp"
                    type="text"
                    placeholder="Flat/ Plot no."
                  />
                </Form.Group>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "70%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Street / Colony<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="streetTemp"
                    type="text"
                    placeholder="Street / Colony"
                  />
                </Form.Group>
              </div>
              <div style={{ display: "flex", width: "100%" }}>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Area<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="areaTemp"
                    type="text"
                    placeholder="Area"
                  />
                </Form.Group>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "50%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    City/ Town<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="cityTemp"
                    type="text"
                    placeholder="City/ Town"
                  />
                </Form.Group>
              </div>
              <div style={{ display: "flex" }}>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "33%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    Pincode<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="pincodeTemp"
                    type="number"
                    placeholder="Pincode"
                  />
                </Form.Group>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "33%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    District<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="districtTemp"
                    type="text"
                    placeholder="District"
                  />
                </Form.Group>
                <Form.Group
                  onChange={(event) => {
                    this.setState({ [event.target.name]: event.target.value });
                  }}
                  className="mb-3"
                  style={{ marginLeft: "10px", width: "34%" }}
                  controlId="formBasicName"
                >
                  <Form.Label>
                    State<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    name="stateTemp"
                    type="text"
                    placeholder="State"
                  />
                </Form.Group>
              </div>
            </Form>
          </div>

          {/* // -------------------------------------------------- Academic details -------------------------------------------------------------------------- */}

          <div style={{ width: "80%", display: "flex", marginTop: "30px" }}>
            <h4>Academic Details</h4>
          </div>

          <div
            className="top-5-companies-table shadow"
            style={{ backgroundColor: "white", padding: "20px", width: "80%" }}
          >
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <tr>
                <th>Education</th>
                <th>Start Year</th>
                <th>Passing Year</th>
                <th>Board/ University</th>
                <th>Marking Scheme</th>
                <th>Marks</th>
              </tr>
              <tr>
                <td>
                  10th<span style={{ color: "red" }}>*</span>
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="text"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="text"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
              </tr>
              <tr>
                <td>12th</td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="text"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="text"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
              </tr>
              <tr>
                <td>Diploma</td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="text"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="text"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
              </tr>
            </table>
          </div>

          <div
            className="top-5-companies-table shadow"
            style={{
              backgroundColor: "white",
              padding: "20px",
              width: "80%",
              margin: "30px 0px",
            }}
          >
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <tr>
                <th>Education Year</th>
                <th>Sem1 CGPA</th>
                <th>Sem2 CGPA</th>
                <th>Active backlog</th>
                <th>Passive backlog</th>
                <th>Starting year</th>
                <th>Ending year</th>
              </tr>
              <tr>
                <td>FE</td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
              </tr>
              <tr>
                <td>SE</td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
              </tr>
              <tr>
                <td>TE</td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    className="table-input"
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
              </tr>
              <tr>
                <td>BE</td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
                <td>
                  <input
                    style={{
                      width: "40%",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="number"
                  />
                </td>
              </tr>
            </table>
          </div>

          {/* // -------------------------------------------------- Submit Button -------------------------------------------------------------------------- */}

          <Button
            onClick={this.handleSubmit}
            variant="primary"
            style={{
              backgroundColor: "#4839f5",
              marginTop: "15px",
              marginBottom: "20px",
            }}
            type="submit"
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/student"
            >
              submit
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}
