import React, { useState } from "react";
import QR from "../../assets/qr_code_barcode.jpg";
import axios from "axios";
import photo1 from "../../assets/poster1.jpg";
import photo2 from "../../assets/poster2.jpg";
import photo3 from "../../assets/poster3.jpg";
import photo4 from "../../assets/poster4.jpg";
import photo5 from "../../assets/poster5.jpg";
import photo6 from "../../assets/poster6.jpg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./eventcards.css";

const Eventcards = () => {

const [data, setData]= useState();
// const [amount, setAmount] = useState();
// const handleamount =(e)=>{
//     setAmount(e.target.value);
// }
const handlechange =(e) =>{
    setData(e.target.value);
    
}

const paymentDone = async() =>{
    const payee ={
        name: localStorage.getItem("UserName"),
        email:localStorage.getItem("Email"),
        
        transactionId: data,
        
    };
   if(data) {
        let response = await axios.post("http://localhost:9000/amuraPayee", payee);
        alert('Status Server: ',response.data.body);
        console.log(response.data.body);
   }else{
    alert('input field empty');
   }

  
}


  return (
    <>
      <div className="eventcard">
        <div className="card1">
          <h3>
            Product Design
            <br />
            Events number: 1
            <br />
            Date: 16/6/23
          </h3>
          <img src={photo1} alt="event1pic" />
          <div className="qr_img">
            <img className="qr__img" src={QR} alt="QR__Code" />
          </div>
        </div>
        <div className="card2">
          <h3>
            Crypto
            <br />
            Events number: 2
            <br />
            Date: 16/6/23
          </h3>
          <img src={photo2} alt="event1pic" />
          <div className="qr_img">
            <img className="qr__img" src={QR} alt="QR__Code" />
          </div>
        </div>
        <div className="card3">
          <h3>
            Mini Games
            <br />
            Events number: 3
            <br />
            Date: 16/6/23
          </h3>
          <img src={photo3} alt="event1pic" />
          <div className="qr_img">
            <img className="qr__img" src={QR} alt="QR__Code" />
          </div>
        </div>
        <div className="card4">
          <h3>
            Product Design
            <br />
            Events number: 4
            <br />
            Date: 16/6/23
          </h3>
          <img src={photo4} alt="event1pic" />
          <div className="qr_img">
            <img className="qr__img" src={QR} alt="QR__Code" />
          </div>
          <div className="inputform">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "55ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Transaction Id"
              variant="outlined"
              value={data}
              onChange={handlechange}
              sx={{
                width: 300,
                textAlign: 'center',
                
              }}
              InputProps={{ sx: { height: 80 } }}
              placeholder="Enter you Transaction Id.."
              
            />
            {/* <TextField
              id="outlined-basic"
              label="Paid Amount"
              variant="outlined"
              value={amount}
              onChange={handlechange}
              sx={{
                width: 300,
                textAlign: 'center',
                
              }}
              InputProps={{ sx: { height: 80 } }}
              placeholder="Enter Amount paid.."
              
            /> */}
          </Box>
          </div>
          <div className="submitbtn">
          <Button
              variant="contained"
              onClick={()=>paymentDone()}
              className="diffBtn"
              size="large"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventcards;
