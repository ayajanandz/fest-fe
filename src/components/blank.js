import React from 'react';
import QRCode from 'react-qr-code';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import './blank.css';

const Blank =() => {
    const navigate = useNavigate();
    const OTP = localStorage.getItem("OTP");

    const setFalse = () => {
        localStorage.setItem("login", false);
        localStorage.setItem("Email", false);
        localStorage.setItem("OTP",null)
    
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
    // const location = useLocation();
    // const { state } = location;
    // console.log(state.otp);
    return(
        <>
        <div className='qrbox'>
            <QRCode
            size={200}
            value={OTP}
            />
            </div>
             <Button
              variant="contained"
              onClick={() => logoutFnc()}
              className="diffBtn"
              size="large"
            >
              Logout
            </Button>
            
        </>
    )
}

export default Blank;