import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const GuestInformation = () => {
  const [searchParams] = useSearchParams();
  const [guestDetails, setGuestDetails] = useState({
    name: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
    email: "",
    alternateEmail: "",
    mobileNumber: "",
    dateOfBirth: {
      dd: 0,
      mm: 0,
      yyyy: 0,
    },
    gender: "",
    aadharNumber: 0,
    panNumber: "",
    collegeRegistrationNumber: "",
    prnNumber: "",
    branch: "",
    currentYear: 1,
    division: 1,
    rollNumber: 1,
    permanentAddress: {
      flatNumber: "",
      street: "",
      area: "",
      city: "",
      pincode: "",
      district: "",
      state: "",
    },
    temporaryAddress: {
      flatNumber: "",
      street: "",
      area: "",
      city: "",
      pincode: "",
      district: "",
      state: "",
    },
    tenth: {
      startYear: 0,
      passingYear: 0,
      board: "",
      markingScheme: "",
      scoredMarks: 0,
      totalMarks: 0,
    },
    twelth: {
      startYear: 0,
      passingYear: 0,
      board: "",
      markingScheme: "",
      scoredMarks: 0,
      totalMarks: 0,
    },
    diploma: {
      startYear: 0,
      passingYear: 0,
      board: "",
      markingScheme: "",
      scoredMarks: 0,
      totalMarks: 0,
    },
    firstYear: {
      cgpaSem1: 0,
      cgpaSem2: 0,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 0,
      endYear: 0,
    },
    secondYear: {
      cgpaSem1: 0,
      cgpaSem2: 0,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 0,
      endYear: 0,
    },
    thirdYear: {
      cgpaSem1: 0,
      cgpaSem2: 0,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 0,
      endYear: 0,
    },
    fourthYear: {
      cgpaSem1: 0,
      cgpaSem2: 0,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 0,
      endYear: 0,
    },
  });

  const userLogin = useSelector((state) => state.userLogin);
  const { token: adminToken } = userLogin.user;

  useEffect(() => {
    const fetchGuestsData = async () => {
      try {
        const studentId = searchParams.get("studentId");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${adminToken}`,
          },
        };
        const { data } = await axios.get(`/api/guests/${studentId}`, config);
        setGuestDetails(data);
      } catch (error) {
        alert("Error: ", error.message);
      }
    };
    fetchGuestsData();
  }, []);

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
                  readOnly
                  value={guestDetails.name.firstName}
                />
              </Form.Group>
              <Form.Group
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
                  readOnly
                  value={guestDetails.name.middleName}
                />
              </Form.Group>
              <Form.Group
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
                  readOnly
                  value={guestDetails.name.lastName}
                />
              </Form.Group>
            </div>
            <Form.Group
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
                readOnly
                value={guestDetails.email}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ marginLeft: "10px", width: "99%" }}
              controlId="formBasicName"
            >
              <Form.Label>Alternate email</Form.Label>
              <Form.Control
                name="alternateEmail"
                type="text"
                placeholder="Alternate email address"
                readOnly
                value={guestDetails.alternateEmail}
              />
            </Form.Group>
            <Form.Group
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
                readOnly
                value={guestDetails.mobileNumber}
              />
            </Form.Group>
            <div style={{ display: "flex" }}>
              <Form.Group
                className="mb-3"
                style={{ marginLeft: "10px", width: "50%" }}
                controlId="formBasicName"
              >
                <Form.Label>
                  Date of birth<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <div style={{ width: "100%", display: "flex" }}>
                  <Form.Control
                    name="dd"
                    style={{ width: "32%" }}
                    type="number"
                    placeholder="DD"
                    readOnly
                    value={new Date(guestDetails.dateOfBirth).getDate()}
                  />
                  <Form.Control
                    name="mm"
                    style={{ width: "32%", marginLeft: "10px" }}
                    type="number"
                    placeholder="MM"
                    readOnly
                    value={new Date(guestDetails.dateOfBirth).getMonth() + 1}
                  />
                  <Form.Control
                    name="yyyy"
                    style={{ width: "32%", marginLeft: "10px" }}
                    type="number"
                    placeholder="YYYY"
                    readOnly
                    value={new Date(guestDetails.dateOfBirth).getFullYear()}
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
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      readOnly
                      checked={guestDetails.gender === "MALE"}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Male
                    </label>
                  </div>
                  <div style={{ marginLeft: "20px" }} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      readOnly
                      checked={guestDetails.gender === "FEMALE"}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </Form.Group>
            </div>
            <div style={{ display: "flex", width: "100%" }}>
              <Form.Group
                className="mb-3"
                style={{ marginLeft: "10px", width: "50%" }}
                controlId="formBasicName"
              >
                <Form.Label>
                  Aadhar no.<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  name="aadharNumber"
                  type="number"
                  placeholder="Aadhar no."
                  readOnly
                  value={guestDetails.aadharNumber}
                />
              </Form.Group>
              <Form.Group
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
                  readOnly
                  value={guestDetails.panNumber}
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
                  College Registration no.
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  name="collegeRegistrationNumber"
                  type="text"
                  placeholder="Registration no."
                  readOnly
                  value={guestDetails.collegeRegistrationNumber}
                />
              </Form.Group>
              <Form.Group
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
                  readOnly
                  value={guestDetails.prnNumber}
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
                  readOnly
                  disabled
                  value={guestDetails.branch}
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
                  Current Year<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select
                  name="currentYear"
                  value={guestDetails.currentYear}
                  readOnly
                  disabled
                >
                  <option> -- Select class -- </option>
                  <option value="3">Third Year</option>
                  <option value="4">Fourth Year</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div style={{ display: "flex", width: "100%" }}>
              <Form.Group
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
                  readOnly
                  value={guestDetails.division}
                />
              </Form.Group>
              <Form.Group
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
                  readOnly
                  value={guestDetails.rollNumber}
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
                  readOnly
                  value={guestDetails.permanentAddress.flatNumber}
                />
              </Form.Group>
              <Form.Group
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
                  readOnly
                  value={guestDetails.permanentAddress.street}
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
                  Area<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  name="area"
                  type="text"
                  placeholder="Area"
                  readOnly
                  value={guestDetails.permanentAddress.area}
                />
              </Form.Group>
              <Form.Group
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
                  placeholder="City / Town"
                  readOnly
                  value={guestDetails.permanentAddress.city}
                />
              </Form.Group>
            </div>
            <div style={{ display: "flex" }}>
              <Form.Group
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
                  readOnly
                  value={guestDetails.permanentAddress.pincode}
                />
              </Form.Group>
              <Form.Group
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
                  readOnly
                  value={guestDetails.permanentAddress.district}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                style={{ marginLeft: "10px", width: "34%" }}
                controlId="formBasicName"
              >
                <Form.Label>
                  State<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  name="state"
                  type="text"
                  placeholder="State"
                  readOnly
                  value={guestDetails.permanentAddress.state}
                />
              </Form.Group>
            </div>
          </Form>
        </div>

        {/* // -------------------------------------------------- Temporary Address details -------------------------------------------------------------------------- */}

        <div
          style={{
            width: "80%",
            display: "flex",
            marginTop: "30px",
            justifyContent: "space-between",
          }}
        >
          <h4 style={{}}>Temporary Address Details</h4>
        </div>

        <div
          style={{ padding: "20px", width: "80%", marginTop: "20px" }}
          className="shadow p-3 mb-5 bg-white rounded"
        >
          <Form style={{ padding: "20px", width: "100%" }}>
            <div style={{ display: "flex", width: "100%" }}>
              <Form.Group
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
                  readOnly
                  value={guestDetails.permanentAddress.flatNumber}
                />
              </Form.Group>
              <Form.Group
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
                  readOnly
                  value={guestDetails.permanentAddress.street}
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
                  Area<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  name="areaTemp"
                  type="text"
                  placeholder="Area"
                  readOnly
                  value={guestDetails.permanentAddress.area}
                />
              </Form.Group>
              <Form.Group
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
                  readOnly
                  value={guestDetails.permanentAddress.city}
                />
              </Form.Group>
            </div>
            <div style={{ display: "flex" }}>
              <Form.Group
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
                  readOnly
                  value={guestDetails.permanentAddress.pincode}
                />
              </Form.Group>
              <Form.Group
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
                  readOnly
                  value={guestDetails.permanentAddress.district}
                />
              </Form.Group>
              <Form.Group
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
                  readOnly
                  value={guestDetails.permanentAddress.state}
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
                  name="startYear"
                  readOnly
                  value={guestDetails.tenth.startYear}
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
                  name="passingYear"
                  readOnly
                  value={guestDetails.tenth.passingYear}
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
                  name="board"
                  readOnly
                  value={guestDetails.tenth.board}
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
                  name="markingScheme"
                  readOnly
                  value={
                    guestDetails.tenth.markingScheme === "PERCENTAGE"
                      ? "    %    "
                      : "GPA"
                  }
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
                  name="marks"
                  readOnly
                  value={(
                    (guestDetails.tenth.scoredMarks * 100) /
                    guestDetails.tenth.totalMarks
                  ).toFixed(2)}
                />
              </td>
            </tr>
            {guestDetails.twelth && (
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
                    name="startYear"
                    readOnly
                    value={guestDetails.twelth.startYear}
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
                    name="passingYear"
                    readOnly
                    value={guestDetails.twelth.passingYear}
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
                    name="board"
                    readOnly
                    value={guestDetails.twelth.board}
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
                    name="markingScheme"
                    readOnly
                    value={
                      guestDetails.twelth.markingScheme === "PERCENTAGE"
                        ? "    %    "
                        : "GPA"
                    }
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
                    name="marks"
                    readOnly
                    value={(
                      (guestDetails.twelth.scoredMarks * 100) /
                      guestDetails.twelth.totalMarks
                    ).toFixed(2)}
                  />
                </td>
              </tr>
            )}
            {guestDetails.diploma && (
              <tr>
                <td>Diploma</td>
                <td>
                  <input
                    onChange={(event) => {
                      setDiploma({
                        diploma: {
                          ...diploma,
                          [event.target.name]: event.target.value,
                        },
                      });
                    }}
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
                    onChange={(event) => {
                      setDiploma({
                        diploma: {
                          ...diploma,
                          [event.target.name]: event.target.value,
                        },
                      });
                    }}
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
                    onChange={(event) => {
                      setDiploma({
                        diploma: {
                          ...diploma,
                          [event.target.name]: event.target.value,
                        },
                      });
                    }}
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
                    onChange={(event) => {
                      setDiploma({
                        diploma: {
                          ...diploma,
                          [event.target.name]: event.target.value,
                        },
                      });
                    }}
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
                    onChange={(event) => {
                      setDiploma({
                        diploma: {
                          ...diploma,
                          [event.target.name]: event.target.value,
                        },
                      });
                    }}
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
            )}
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
                  name="cgpaSem1"
                  readOnly
                  value={guestDetails.firstYear.cgpaSem1}
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
                  name="cgpaSem2"
                  readOnly
                  value={guestDetails.firstYear.cgpaSem2}
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
                  name="activeBacklog"
                  readOnly
                  value={guestDetails.firstYear.activeBacklog}
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
                  name="passiveBacklog"
                  readOnly
                  value={guestDetails.firstYear.passiveBacklog}
                />
              </td>
              <td>
                <input
                  className="table-input"
                  style={{
                    width: "50%",
                    border: "none",
                    borderBottom: "1px solid gray",
                  }}
                  type="number"
                  name="startYear"
                  readOnly
                  value={guestDetails.firstYear.startYear}
                />
              </td>
              <td>
                <input
                  className="table-input"
                  style={{
                    width: "50%",
                    border: "none",
                    borderBottom: "1px solid gray",
                  }}
                  type="number"
                  name="endYear"
                  readOnly
                  value={guestDetails.firstYear.endYear}
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
                  name="cgpaSem1"
                  readOnly
                  value={guestDetails.secondYear.cgpaSem1}
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
                  name="cgpaSem2"
                  readOnly
                  value={guestDetails.secondYear.cgpaSem2}
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
                  name="activeBacklog"
                  readOnly
                  value={guestDetails.secondYear.activeBacklog}
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
                  name="passiveBacklog"
                  readOnly
                  value={guestDetails.secondYear.passiveBacklog}
                />
              </td>
              <td>
                <input
                  style={{
                    width: "50%",
                    border: "none",
                    borderBottom: "1px solid gray",
                  }}
                  type="number"
                  name="startYear"
                  readOnly
                  value={guestDetails.secondYear.startYear}
                />
              </td>
              <td>
                <input
                  style={{
                    width: "50%",
                    border: "none",
                    borderBottom: "1px solid gray",
                  }}
                  type="number"
                  name="endYear"
                  readOnly
                  value={guestDetails.secondYear.endYear}
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
                  name="cgpaSem1"
                  readOnly
                  value={guestDetails.thirdYear.cgpaSem1}
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
                  name="cgpaSem2"
                  readOnly
                  value={guestDetails.thirdYear.cgpaSem2}
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
                  name="activeBacklog"
                  readOnly
                  value={guestDetails.thirdYear.activeBacklog}
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
                  name="passiveBacklog"
                  readOnly
                  value={guestDetails.thirdYear.passiveBacklog}
                />
              </td>
              <td>
                <input
                  className="table-input"
                  style={{
                    width: "50%",
                    border: "none",
                    borderBottom: "1px solid gray",
                  }}
                  type="number"
                  name="startYear"
                  readOnly
                  value={guestDetails.thirdYear.startYear}
                />
              </td>
              <td>
                <input
                  className="table-input"
                  style={{
                    width: "50%",
                    border: "none",
                    borderBottom: "1px solid gray",
                  }}
                  type="number"
                  name="endYear"
                  readOnly
                  value={guestDetails.thirdYear.endYear}
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
                  name="cgpaSem1"
                  readOnly
                  value={guestDetails.fourthYear.cgpaSem1}
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
                  name="cgpaSem2"
                  readOnly
                  value={
                    guestDetails.fourthYear.cgpaSem2 &&
                    guestDetails.fourthYear.cgpaSem2 > 0
                      ? guestDetails.fourthYear.cgpaSem2
                      : "TBD"
                  }
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
                  name="activeBacklog"
                  readOnly
                  value={guestDetails.fourthYear.activeBacklog}
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
                  name="passiveBacklog"
                  readOnly
                  value={guestDetails.fourthYear.passiveBacklog}
                />
              </td>
              <td>
                <input
                  style={{
                    width: "50%",
                    border: "none",
                    borderBottom: "1px solid gray",
                  }}
                  type="number"
                  name="startYear"
                  readOnly
                  value={guestDetails.fourthYear.startYear}
                />
              </td>
              <td>
                <input
                  style={{
                    width: "50%",
                    border: "none",
                    borderBottom: "1px solid gray",
                  }}
                  type="text"
                  name="endYear"
                  readOnly
                  value={
                    guestDetails.fourthYear.endYear
                      ? guestDetails.fourthYear.endYear
                      : "TBD"
                  }
                />
              </td>
            </tr>
          </table>
        </div>

        {/* // -------------------------------------------------- Submit Button -------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};
export default GuestInformation;
