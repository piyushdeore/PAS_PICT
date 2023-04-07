import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default class LoginController extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "650px",
            alignItems: "center",
          }}
        >
          {/* <div style={{padding:'20px',width:'40%',height:'450px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} className="shadow p-3 mb-5 bg-white rounded">
            <div style={{display:'flex',justifyContent:'center'}}><h2>For</h2><h2 style={{color:'#4839f5',marginLeft:'10px'}}>Students</h2></div>
            <div style={{width:'70%',marginTop:'10px',letterSpacing:'1px'}}>
              <p style={{fontWeight:'bold'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
            </div>
            <Button variant="primary" style={{backgroundColor:'#4839f5',marginTop:'20px',width:'30%'}} type="submit">
              <Link style={{textDecoration:'none',color:'white'}} to='/student-login'>Login</Link>
            </Button>
          </div> */}
          <div
            style={{
              padding: "20px",
              width: "40%",
              height: "450px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2>Login</h2>
              {/* <h2 style={{ color: "rgb(230, 166, 48)", marginLeft: "10px" }}>
                Coordinators
              </h2> */}
            </div>
            {/* <div
              style={{ width: "70%", marginTop: "10px", letterSpacing: "1px" }}
            >
              <p style={{ fontWeight: "bold" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip{" "}
              </p>
            </div> */}
            <Button
              style={{
                backgroundColor: "rgb(230, 166, 48)",
                marginTop: "20px",
                width: "30%",
                borderColor: "rgb(230, 166, 48)",
              }}
              type="submit"
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/student-login"
              >
                Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
