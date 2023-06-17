import React from 'react';
import Newnavbar from '../newnavbar/newnavbar';
import Button from "@mui/material/Button";
// import img0 from '../../assets/poster0.jpg';
// import img1 from '../../assets/poster1.jpg';
import './amura.css';
 import Gallery from "../gallery/gallery";
 import Eventcards from '../eventcards/eventscards';
import { useNavigate } from 'react-router-dom';

const Amura = () => {
    const navigate = useNavigate();

    const logoutFnc = () => {
        resetUsername();
        setFalse();
      };

      const setFalse = () => {
        localStorage.setItem("login", false);
        localStorage.setItem("Email", false);
        
        navigate("/login");
      };
    const resetUsername = () => {
        localStorage.setItem("UserName", false);
      };
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
        </div>
        </div>
    </>
   )
}

export default Amura;