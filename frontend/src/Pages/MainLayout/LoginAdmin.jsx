import React, { useEffect, useState } from "react";
import LoginImage from "../../assets/login-admin.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loginAdminAction } from "../../store/userLoginSlice";
import Message from "../../Components/Message";

const LoginAdmin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { status, user, error } = useSelector((state) => state.userLogin);
  const [userSubmitted, setUserSubmitted] = useState(false);

  const handleChange = (event) => {
    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    setUserSubmitted(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(credentials);
    setUserSubmitted(true);
    dispatch(loginAdminAction(credentials));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/admin");
    }
  }, [user, error]);
  return (
    <div>
      {!user && userSubmitted && error && (
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
                  name="password"
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Group>
              <b>
                New user ?{" "}
                <Link style={{ color: "#E9A630" }} to="/admin-signup">
                  Signup
                </Link>
              </b>
              <br />
              <Button
                style={{
                  backgroundColor: "#E9A630",
                  marginTop: "20px",
                  border: "none",
                }}
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

export default LoginAdmin;
