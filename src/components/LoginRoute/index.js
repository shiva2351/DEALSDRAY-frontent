

import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginRoute = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    let login=()=>{
        let payload = {email, password}
        axios.post('http://localhost:4001/login', payload)
        .then((e)=>{
            if(e.data.status === "success"){
                navigate(`/dashbord/${e.data.id}`)
            }
            else if(e.data.status === "fail"){
                alert("wrong password")
            }
            else if(e.data.status === "noUser"){
                alert("Invalid Email")
            }
        })
    }

    return (
        <div>
            <div className=''>
                <h1 className=''>Login Form</h1>
                <div className=''> 
                <input className=' ' placeholder='Email' type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <br />
                <input className='' placeholder='Password' type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className='' onClick={login}>LOGIN</button>
                <br />
                <p>do not have Account? <Link to='/register'> Sign Up</Link> </p>
                </div>
            </div>


        </div>
    )
}

export default LoginRoute