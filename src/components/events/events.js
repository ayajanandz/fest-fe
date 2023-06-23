import React from 'react';

import './events.css';
import amura from '../../assets/Amura.png'




const Events = ()=> {
    const email = localStorage.getItem("Email")
    const name = localStorage.getItem("UserName");
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
                   
        </div>

        </>
    )
}

export default Events;