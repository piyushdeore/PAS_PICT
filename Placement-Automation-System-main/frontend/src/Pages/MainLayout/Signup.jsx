import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SignupImage from "../../assets/signup.svg";
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { registerGuestsAction } from "../../store/userLoginSlice";

class Signup extends Component {
  constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      collegeRegistrationNo: "",
      email: "",
      password: "",
    };
  }

  submitHandler(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(registerGuestsAction(this.state));
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            padding: "10px",
            marginTop: "100px",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{ padding: "20px" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Form style={{ padding: "20px" }}>
              <Form.Group
                onChange={(event) => {
                  this.setState({ [event.target.name]: event.target.value });
                }}
                className="mb-3"
                style={{ width: "500px" }}
                controlId="formBasicName"
              >
                <Form.Label>College Registration ID</Form.Label>
                <Form.Control
                  name="collegeRegistrationNo"
                  type="text"
                  placeholder="Enter college registration ID"
                />
              </Form.Group>
              <Form.Group
                onChange={(event) => {
                  this.setState({ [event.target.name]: event.target.value });
                }}
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                onChange={(event) => {
                  this.setState({ [event.target.name]: event.target.value });
                }}
                className="mb-3"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                />
              </Form.Group>
              <b>
                Already user ? <Link to="/student-login">Login</Link>
              </b>
              <br />
              <Button
                variant="primary"
                style={{ backgroundColor: "#4839f5", marginTop: "20px" }}
                type="submit"
                onClick={this.submitHandler}
              >
                {/* <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/student-information-form"
                >
                  Sign up
                </Link> */}
                Atharva
              </Button>
            </Form>
          </div>
          <div className="right-section">
            <img
              alt="Signup"
              src={SignupImage}
              style={{ height: "400px", width: "500px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Signup);
