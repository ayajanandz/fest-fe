import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from 'axios';

const Verification = (props) => {
    const payee = props.payee;
    const email = payee.Email;
    const isVerified = payee.Verified;
const [status, setStatus] = useState('false');


    const verifyUser = async(email) => {
          console.log("clicked for the emailid:",email);
           setStatus(!status);
           let response = await axios.post("http://localhost:9000/verified",{email});
           console.log(response.data.body);
             
    }
    
  return (
    <>
      <tr key={payee.Email}>
        <td>{payee.Name}</td>
        <td>{payee.Email}</td>
        <td>{payee.TransactionId}</td>
        <td>{status && isVerified=="false"?<Button
              variant="contained"
              onClick={() => verifyUser(email)}
              className="diffBtn"
              size="large"
            >
              Verify
            </Button>:<Button
              variant="contained"
              
              
              className="diffBtn"
              size="large"
            >
              Verified
            </Button>
        }
          
        </td>
      </tr>
    </>
  );
};

export default Verification;
