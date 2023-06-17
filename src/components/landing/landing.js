import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";


const Landing = ()=> {
 const navigate = useNavigate();

  const loginfnc=()=>{
   navigate('/login');
  }


  return (
    <>
        <div>
            Hello this is landing page!
        </div>

        <div className="btn ">
        <Button
              variant="contained"
              onClick={()=>loginfnc()}
              className="diffBtn"
              size="large"

            >
              Login
            </Button>
        </div>
    </>
  )
}

export default Landing;