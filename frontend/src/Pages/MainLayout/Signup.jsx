import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SignupImage from "../../assets/signup.svg";
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { registerGuestsAction } from "../../store/userLoginSlice";
import withRouter from "../../utils/withRouter";

class Signup extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.submitHandler = this.submitHandler.bind(this);

    this.state = {
      collegeRegistrationNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        collegeRegistrationNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { collegeRegistrationNumber, email, password, confirmPassword } =
      this.state;

    // Simple form validation
    //let errors = {};
    // console.log(collegeRegistrationNumber);
    // console.log(email);
    // const errors = { ...this.state.errors };
    const errors = {};
    //console.log(errors)
    if (collegeRegistrationNumber === "") {
      errors.collegeRegistrationNumber = "Registration number is required";
    } else if (collegeRegistrationNumber.length !== 8) {
      // console.log("in if");
      errors.collegeRegistrationNumber =
        "Registration number should be of 8 characters";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    const errorsExist = Object.keys(errors) && Object.keys(errors).length > 0;
    if (errorsExist) {
      // console.log("errors", errors);
      this.setState({ errors });
    } else {
      // Make API request or submit form data
      // console.log("Reached here");

      const { dispatch } = this.props;
      const guestDetails = {
        collegeRegistrationNumber: this.state.collegeRegistrationNumber,
        email: this.state.email,
        password: this.state.password,
      };
      dispatch(registerGuestsAction(guestDetails));
      this.props.navigate("/student-information-form");
    }
  };

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
                  this.handleChange(event);
                }}
                className="mb-3"
                style={{ width: "500px" }}
                controlId="formBasicName"
              >
                <Form.Label>College Registration ID</Form.Label>
                <Form.Control
                  name="collegeRegistrationNumber"
                  type="text"
                  placeholder="Enter college registration ID"
                />
                {this.state.errors.collegeRegistrationNumber &&
                this.state.errors.collegeRegistrationNumber.length === 0 ? (
                  <p></p>
                ) : (
                  <p style={{ color: "red" }}>
                    {this.state.errors.collegeRegistrationNumber}
                  </p>
                )}
              </Form.Group>
              <Form.Group
                onChange={(event) => {
                  this.handleChange(event);
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
                {this.state.errors.email &&
                this.state.errors.email.length === 0 ? (
                  <p></p>
                ) : (
                  <p style={{ color: "red" }}>{this.state.errors.email}</p>
                )}
              </Form.Group>

              <Form.Group
                onChange={(event) => {
                  this.handleChange(event);
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
                {this.state.errors.password &&
                this.state.errors.password.length === 0 ? (
                  <p></p>
                ) : (
                  <p style={{ color: "red" }}>{this.state.errors.password}</p>
                )}
              </Form.Group>
              <Form.Group
                onChange={(event) => {
                  this.handleChange(event);
                  // this.setState({ [event.target.name]: event.target.value });
                }}
                className="mb-3"
                controlId="formBasicConfirmPassword"
              >
                <Form.Label> Confirm Password</Form.Label>
                <Form.Control
                  name="confirmPassword"
                  type="password"
                  placeholder="Enter Password"
                />
                {this.state.errors.confirmPassword &&
                this.state.errors.confirmPassword.length === 0 ? (
                  <p></p>
                ) : (
                  <p style={{ color: "red" }}>
                    {this.state.errors.confirmPassword}
                  </p>
                )}
              </Form.Group>
              <b>
                Already user ? <Link to="/student-login">Login</Link>
              </b>
              <br />
              <Button
                variant="primary"
                style={{ backgroundColor: "#4839f5", marginTop: "20px" }}
                type="submit"
                onClick={this.handleSubmit}
              >
                {/* <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/student-information-form"
                >
                  Sign up
                </Link> */}
                Signup
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

export default connect()(withRouter(Signup));
