import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";


const Admin = (props)=>{
  const navigate = useNavigate();


  const logoutFnc = () => {
    localStorage.setItem("UserName",false);
    localStorage.setItem("login",false);
    localStorage.setItem("Admin",false);
    localStorage.setItem("Email", false);
    navigate("/login");
  };


    const [data, setData] = useState([])
    useEffect(()=>{ 
        if(localStorage.getItem("Admin")==="true"){
        axios.get('http://localhost:9000/admin?category=amuraPayee')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        console.log(data);
    }else {
        alert('Oops you are logged out!')
        navigate('/login');
    }

    // console.log(data);
    },[])

    // console.log(data);
    const[searchTerm, setsearchTerm] = useState("");

if(localStorage.getItem("Admin")==="true") {

   
    return(
    <>
        <div className='greeting'>
            <h1>
                Hello Dear Admin 1
            </h1>
        </div>
        <div className='container'>
            {/* <div className='mt-3'> */}

            <input type='text' placeholder='Search...' style={{marginTop:50, marginBottom:20, width:"40%", height:30, fontSize:20}}
                onChange={(e)=> {
                    setsearchTerm(e.target.value);
                }}
            />

                <table className='table table-bordered' style={{fontSize:20, width:"100%", justifyItems: 'space-around'}} >
                    <thead className='thead-dark'>
                        <tr>
                            
                            <th>Name</th>
                            {/* <th>USN</th> */}
                            <th>Email</th>
                            <th>Transaction Id</th>
                            {/* <th>Rating</th> */}
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                          data.filter(val =>{
                            if(searchTerm === ""){
                                return val;
                            }
                            else if(
                                val.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.TransactionId.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                            {
                                return val;
                            }
                          }).map((payee, index)=>{
                            return<tr key={index}>
                                
                                <td>{payee.Name}</td>
                                <td>{payee.Email}</td>
                                <td>{payee.TransactionId}</td>
                                {/* <td>{movie.Year}</td>
                                <td>{movie.Rating}</td> */}
                                
                            </tr>
                          })  
                        }
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
    </>
)


} else {
    return(
        <>
            <div> 
            <h1>
                You dont have admin authorisation login as a user
            </h1>
            </div>
        </>
    )
}
}



export default Admin;