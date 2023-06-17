import React, { useState } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Events from "../events/events";
import "./dashboard.css";
import Login from '../login/login';
import Navbar from "../navbar/navbar";
import axios from 'axios';
import background from "../../assets/leone-venter-VieM9BdZKFo-unsplash.jpg";

const Dashboard = () => {
  const navigate = useNavigate();
  let OTP = null;
  
  
  const email = localStorage.getItem("Email");
  const adminPage = () => {
    navigate("/admindashboard");
  };

  const setFalse = () => {
    localStorage.setItem("login", false);
    localStorage.setItem("Email", false);

    navigate("/login");
  };
  const resetUsername = () => {
    localStorage.setItem("UserName", false);
  };
  const logoutFnc = () => {
    resetUsername();
    setFalse();
    localStorage.setItem("Admin", "false");
  };

  const displayOTP=async()=>{
   let response = await axios.post("http://localhost:9000/otp",{email})
   localStorage.setItem("OTP",response.data.body.OTPgenerated);
       const propsToPass = {
      OTP:response.data.body.OTPgenerated ,
      name:localStorage.getItem("UserName"),
    };

    navigate('/blank', { state: propsToPass });
  
    // OTP = response.data.body.OTPgenerated;
    
    
    // .then((res)=>alert('Your OTP is: ',res.data.body.OTPgenerated.toString()))
  }

  if (localStorage.getItem("Admin") === "true") {
    return (
      <>
        <Navbar />
        <div className="box">
          <div className="logoutbtn">
            <Button
              variant="contained"
              onClick={() => logoutFnc()}
              className="diffBtn"
              size="large"
            >
              Logout
            </Button>
            
            <Events />
          </div>

          <Button
            variant="contained"
            onClick={() => adminPage()}
            className="diffBtn"
            size="large"
          >
            Admin
          </Button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        
        <div className="box">
          <div className="logoutbtn">
            {/* <button onClick={()=>logoutFnc()}>Logout</button> */}
            <Button
              variant="contained"
              onClick={() => logoutFnc()}
              className="diffBtn"
              size="large"
            >
              Logout
            </Button>
             
            <Events />
            <Button
              variant="contained"
              onClick={() => displayOTP()}
              className="diffBtn"
              size="large"
            >
              Show OTP
            </Button>
          </div>
        </div>
      </>
    );
  

    
  }
};

export default Dashboard;
