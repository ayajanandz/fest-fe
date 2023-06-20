import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from 'axios';

const Verification = (props) => {
    const payee = props.payee;
    const email = payee.Email;
const [status, setStatus] = useState('false')

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
        <td>{status?<Button
              variant="contained"
              onClick={() => verifyUser(email)}
              className="diffBtn"
              size="large"
            >
              Verify
            </Button>:<Button
              variant="contained"
              //onClick={() => verifyUser(email)}
              className="diffBtn"
              size="large"
            >
              Verified
            </Button>
        }
          {/* {payee.Verified} <p> </p>
          {status ? (
            <AiOutlineCheckCircle
              key={payee.Email}
              onClick={() => changestatus(payee.Email)}
            />
          ) : (
            <AiFillCheckCircle onClick={() => changestatus(payee.Email)} />
          )} */}
        </td>
      </tr>
    </>
  );
};

export default Verification;
