import React from 'react';
import axios from 'axios';
import './events.css';
import amura from '../../assets/Amura.png'
import { useNavigation } from 'react-router-dom';



const Events = ()=> {
    const mail = localStorage.getItem("Email")
    const name = localStorage.getItem("UserName");
    
 const Passes =async() => {
    console.log(name,mail);
    let obj = {
        mail,
        name
    };
     try{
        let response = await axios.post("http://localhost:9000/amura", obj);
        if(response.data.message){
         alert('User already present in records');
        }
     }catch(err) {
        console.log(err);
     }
 }

    return(
        <>
        <div className='eventscard'>
          <h2><a href='/amura'>
            Amura Fest
            </a>
            <br/>
            <br/>
            Events listed:
            1 <br/>
            2 <br/>
          </h2>
          <img src={amura} alt='Club_Img' />
          <div className='passbtn'>
          <button onClick={() => Passes()}>Get Passes</button>
          </div>
          
        </div>

        </>
    )
}

export default Events;