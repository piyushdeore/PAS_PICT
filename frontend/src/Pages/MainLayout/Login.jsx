import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoginImage from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  loginGuestsAction,
  loginStudentsAction,
  loginAdminAction,
} from "../../store/userLoginSlice";
import Message from "../../Components/Message";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [studentLoginRequestSent, setStudentLoginRequestSent] = useState(false);
  const [guestLoginRequestSent, setGuestLoginRequestSent] = useState(false);
  const [adminLoginRequestSent, setAdminLoginRequestSent] = useState(false);

  const { status, user, error } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleChange = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    setStudentLoginRequestSent(false);
    setGuestLoginRequestSent(false);
    setAdminLoginRequestSent(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userDetails = {
      email: credentials.email,
      password: credentials.password,
    };
    dispatch(loginStudentsAction(userDetails));
    dispatch(loginGuestsAction(userDetails));
    dispatch(loginAdminAction(userDetails));
    setTimeout(() => {
      setStudentLoginRequestSent(true);
      setGuestLoginRequestSent(true);
      setAdminLoginRequestSent(true);
    }, 2000);
  };

  useEffect(() => {
    if (error) {
      // dispatch(loginGuestsAction(credentials));
      // setGuestLoginRequestSent(true);
    } else if (user) {
      if (user.userType === "STUDENT") navigate("/student");
      else if (user.userType === "GUEST") navigate("/student-information-form");
      else if (user.userType === "ADMIN") navigate("/admin");
    }
  }, [user, error, dispatch]);

  return (
    <div>
      {studentLoginRequestSent &&
        guestLoginRequestSent &&
        adminLoginRequestSent &&
        error && (
          <Message variant="danger">Username and password dont match</Message>
        )}
      <div style={{ marginTop: "100px" }}>
        <div
          style={{
            display: "flex",
            padding: "10px",
            marginTop: "50px",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{ padding: "20px" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Form style={{ padding: "20px" }}>
              <Form.Group
                style={{ width: "500px" }}
                className="mb-3"
                controlId="formBasicEmail"
                onChange={handleChange}
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                onChange={handleChange}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>
              <b>
                New user ? <Link to="/student-signup">Signup</Link>
              </b>
              <br />
              <Button
                variant="primary"
                style={{ backgroundColor: "#4839f5", marginTop: "20px" }}
                type="submit"
                onClick={submitHandler}
              >
                Login
              </Button>
            </Form>
          </div>
          <div className="right-section">
            <img
              alt="Login"
              src={LoginImage}
              style={{ height: "400px", width: "500px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
