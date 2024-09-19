import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';


const RegistrationRoute = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [cnfPassword, setCnfPassword] = useState('')
    let navigate = useNavigate()

    let submitForm =()=>{
        let payload = {
            name,email,cnfPassword
        }
        if(!name || !email || !cnfPassword){
            alert("To register Fill all the fields..!")
        }
        else{
            if(password === cnfPassword ){
                axios.post('http://localhost:4001/register', payload)
            .then((e)=>{
                alert(e.data);
                navigate("/")
            })
            .catch((e)=>{
                alert("problem in sending data to the Backend.!");
            })
            }
            else{
                alert("both password should be matched..")
            }
            
        }
    }

    return (
        <div className=''>
            <div className=''>
                <h1 className=''>Admin Registration Form</h1>
                <div className=''>
                    <input className='' placeholder='Enter Full Name' type="text" value={name} onChange={(e)=>{setName(e.target.value)}} required />
                    <input required  className='' placeholder='Enter Email' type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <input required  className='' placeholder='Enter Password' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <input className='' placeholder='Retype Password' type="password" value={cnfPassword} onChange={(e)=>{setCnfPassword(e.target.value)}}/>
                    <button className='' onClick={submitForm}>Register Me</button>
                    <p>already have Account? <Link to='/'> Sign In</Link> </p>
                </div>
            </div>
        </div>
    )
}


export default RegistrationRoute