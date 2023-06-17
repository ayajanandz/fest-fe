import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import { useNavigate } from 'react-router-dom';

const Register =() => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } =e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register =() => {
        
        const { name, email, password, reEnterPassword } = user
        
        if( name && email && password && (password===reEnterPassword)) {
            axios.post("http://localhost:9000/register", user)
            .then( res => {alert(res.data.message)
             } )
            alert("Registered Successfully")
            navigate('/login');
        } else {
            alert("invalid input")
        }
        
    }

    return(
        <>
        <div className='register'>
        <h1>
            Register
            </h1>
            <input type='text'
             name="name" 
             value={user.name} 
             placeholder='Your Name'
             onChange = { handleChange }>
            </input>

            <input type='text'
             name="email" 
             value={user.email} 
             placeholder='Your Email'
             onChange = { handleChange }>
            </input>

            <input type='password' 
            name="password" 
            value={user.password} 
            placeholder='Your Password'
            onChange = { handleChange }>
            </input>

            <input type='password'
            name="reEnterPassword" 
            value ={user.reEnterPassword}
            placeholder='Re-enter your Password'
            onChange = { handleChange }>
            </input>

            <div className='button' onClick={register}>Register</div>

            <div><h1>or</h1></div>

            <div className='button' onClick={() => navigate('/login')}>Login</div>
        </div>
        {/* <section className='hero-section'>
                <p>Hey There !</p>
                <h1>Welcome</h1>
            </section> */}

        </>
    )
}

export default Register;