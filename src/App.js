import React from "react";
import Landing from "./components/landing/landing"
import Dasboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Navbar from './components/navbar/navbar';
import Amura from './components/amura/amura';
import Admindashboard from './components/admin/admindashboard';
import Blank from "./components/blank";
import './App.css';
import { Routes, Route } from "react-router-dom";


const App = ()=>{
    // localStorage.setItem("UserName",false);
    // localStorage.setItem("login",false);
    // localStorage.setItem("Admin",false);
    // localStorage.setItem("Email", false);

    return(
        <>
        {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dasboard />} />
                <Route path="/amura" element={<Amura />} />
                <Route path="/admindashboard" element={<Admindashboard />} />
                <Route path="/blank" element={<Blank />}/>
            </Routes>
        </>
    )

}

export default App;