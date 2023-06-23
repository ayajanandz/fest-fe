import React, { useEffect, useState } from 'react';
import Newnavbar from '../newnavbar/newnavbar';
import Button from "@mui/material/Button";
import axios from "axios";
// import img0 from '../../assets/poster0.jpg';
// import img1 from '../../assets/poster1.jpg';
import './amura.css';
 import Gallery from "../gallery/gallery";
 import Eventcards from '../eventcards/eventscards';
import { useNavigate } from 'react-router-dom';

const Amura = () => {
    const navigate = useNavigate();
    const email = localStorage.getItem("Email");
    const [status, setStatus] = useState();
  

    const logoutFnc = () => {
        resetUsername();
        setFalse();
      };

      const setFalse = () => {
        localStorage.setItem("login", false);
        localStorage.setItem("Email", false);
        localStorage.setItem("OTP","false");
        
        navigate("/login");
      };
    const resetUsername = () => {
        localStorage.setItem("UserName", false);
      };
      const displayOTP=async()=>{
        let response = await axios.post("http://localhost:9000/otp",{email})
        localStorage.setItem("OTP",response.data.body.OTPgenerated);
        if(localStorage.getItem("OTP")!=="false" && localStorage.getItem("OTP")!=="undefined"){
          setStatus(true);
          
          
        }else {
          setStatus(false);
        }
        console.log("Status is: ",status);
       
       }

       useEffect(()=>{
        displayOTP();
        
       },[status])

       console.log("stats",status);
     

   return(
    <>
    <Newnavbar/>

    <h1 id='heading'>
            Hello amura enthusiasts..
            </h1>
        <div className='bodypart'>
        
            <div className='box_container'>
            <Gallery />
            </div>
            <Eventcards />
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
            <div className='otpbtn'>
            {status?<Button
              variant="contained"
              onClick={() => navigate('/blank')}
              className="diffBtn"
              size="large"
            >
              Show OTP
            </Button>:<div className='lmao'><h2>Verification pending!</h2></div>
            }
            
            </div>
        </div>
        </div>
    </>
   )
}

export default Amura;