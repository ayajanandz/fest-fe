import React from "react";
import axios from "axios";
import Dashboard from "../dashboard/dashboard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./login.css";

const Login = () => {
    

    
    const navigate = useNavigate();
    const [valid, isValid] = useState("false");
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    };
  
    const logincheck = async () => {
      try {
        let response = await axios.post("http://localhost:9000/login", user);
        // userId = response.data.body._id;
  
        if (response && response.data.body._id) {
          isValid("true");
          localStorage.setItem("login", true);
          localStorage.setItem("Admin",response.data.body.IsAdmin);
          localStorage.setItem("UserName", response.data.body.Name);
          localStorage.setItem("Email", response.data.body.Email);
          
        } else {
          alert("Invalid Credentials");
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    let login = "";
    useEffect(() => {
      login = localStorage.getItem("login");
  
      if (login === "true") {
        
        
         navigate("/dashboard")
         
      } else {
        navigate("/login");
      }
    }, [valid]);
  
    return (
      <><div className="boxlogin">
        <div className="login">
          <h1>Login</h1>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Email.."
            onChange={handleChange}
          ></input>
  
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Password.."
            onChange={handleChange}
          ></input>
  
          <div className="button" onClick={logincheck}>
            Login
          </div>
          <div>
            <h1>or</h1>
          </div>
          <div className="button" onClick={() => navigate("/register")}>
            Register
          </div>
        </div>
        </div>
      </>
    );
  };
  
  export default Login;