import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./admindashboard";
 import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import Newnavbar from "../newnavbar/newnavbar";
import  Verification  from './admin_verification';

const Admin = (props) => {
  const navigate = useNavigate();
  
 const [status, setStatus] =useState(true);

  // const changestatus = (email)=> {
  //       console.log("clicked for the emailid:",email);
  //       setStatus(!status);
  //       axios
  //         .post("http://localhost:9000/verified",{email})
  //         .then((res)=>console.log(res))
  //         .catch((err)=> console.log(err));
  // }
//   useEffect(()=>{
//     return<h1>Hello Clicked </h1>
//   },[status]);

  const logoutFnc = () => {
    localStorage.setItem("UserName", false);
    localStorage.setItem("login", false);
    localStorage.setItem("Admin", false);
    localStorage.setItem("Email", false);
    navigate("/login");
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("Admin") === "true") {
      axios
        .get("http://localhost:9000/admin?category=amuraPayee")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
       // console.log(data);
    } else {
      alert("Oops you are logged out!");
      navigate("/login");
    }
    
     //console.log(data);
  }, []);

   console.log(data);
   console.log("AYaj");

  const [searchTerm, setsearchTerm] = useState("");

  if (localStorage.getItem("Admin") === "true") {
    return (
      <>
        <Newnavbar />
        <div className="boxadmin">
          <div className="greeting">
            <h1>Hello Dear Admin 1</h1>
          </div>
          <div className="container">
            {/* <div className='mt-3'> */}

            <input
              type="text"
              placeholder="Search..."
              style={{
                marginTop: 50,
                marginBottom: 20,
                width: "40%",
                height: 30,
                fontSize: 20,
              }}
              onChange={(e) => {
                setsearchTerm(e.target.value);
              }}
            />

            <table
              className="table table-bordered"
              style={{
                fontSize: 20,
                width: "100%",
                justifyItems: "space-around",
              }}
            >
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  {/* <th>USN</th> */}
                  <th>Email</th>
                  <th>Transaction Id</th>
                  <th>Verified</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.Name.toLowerCase().includes(
                        searchTerm.toLowerCase()
                      ) ||
                      val.TransactionId.toLowerCase().includes(
                        searchTerm.toLowerCase()
                      )
                    ) {
                      return val;
                    }
                  })
                  .map((payee) => {
                    return (
                      <Verification key={payee.Email} payee = {payee}/>
                      
                    );
                })}
              </tbody>
            </table>
            {/* </div> */}
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
    );
  } else {
    return (
      <>
        <div>
          <h1>You dont have admin authorisation login as a user</h1>
        </div>
      </>
    );
  }
};

export default Admin;
