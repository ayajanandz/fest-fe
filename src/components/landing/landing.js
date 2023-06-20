// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";


// const Landing = ()=> {
//  const navigate = useNavigate();

//   const loginfnc=()=>{
//    navigate('/login');
//   }


//   return (
//     <>
//         <div>
//             Hello this is landing page!
//         </div>

//         <div className="btn ">
//         <Button
//               variant="contained"
//               onClick={()=>loginfnc()}
//               className="diffBtn"
//               size="large"

//             >
//               Login
//             </Button>
//         </div>
//     </>
//   )
// }

// export default Landing;

import React from "react";
import "./landing.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="heading">
      <h1>
        Hello!
      </h1>
        <h4>
            You want to watch a movie or read a book but you are worried that you might end up wasting 
            your precious time
            ..we have a solution read what others  <br/>have to say about the movie 
            or the books. Choose the best one and don't forget to have a look at the comments
            section. 
        </h4>
      </div>
       
      <Button
        variant="contained"
        onClick={() => navigate("/login")}
        className="diffBtn">
        Log Me In !
      </Button> */}
      <div className="masterlanding">
      <div className="landingpage">
        <div className="heading">
          <h1>
            Hello There! 
          </h1>
           </div>
           <div className="content">
            <h4>
            Dear Users you can get all the deatails of the upcoming fests on this page. You can register and even pay for the 
            events and get the QR code after the payment is verified which is your Pass for the events going to be held.
           
            </h4>
           </div>
           <div className="loginbtn">
           <Button
               variant="contained"
               onClick={() => navigate("/login")}
               className="diffBtn">
                Log Me In !
             </Button>

           </div>
      </div>
      </div>
      
      
    </>
  );
};

export default Landing;
