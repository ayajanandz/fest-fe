import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Events from '../events/events';
import './dashboard.css';
import Navbar from "../navbar/navbar";
import background from "../../assets/leone-venter-VieM9BdZKFo-unsplash.jpg";

const Dashboard = ()=> {

const navigate = useNavigate();
 const adminPage = ()=>{
  navigate("/admindashboard");
 }


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
        localStorage.setItem("Admin","false");
      };


      if(localStorage.getItem("Admin") ==="true"){
        return(
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
        )
      }else {
    
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
          </div>
          </div>
    </>
  )
      }
}

export default Dashboard;