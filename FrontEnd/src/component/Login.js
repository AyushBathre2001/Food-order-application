import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const Navigate = useNavigate()
    const [cred ,setCred] = useState({username:'',password:''}) 
    const handleClick = async (e)=>{
        e.preventDefault()

        const response = await fetch('http://localhost:5500/auth/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({"username": cred.username,"password":cred.password}) 
              });
              const value = await response.json()
              if(value.success === true){
                localStorage.setItem('token',value.token)
                Navigate('/')
              }
              else{
                document.querySelector('.errbox').classList.remove('d-none')
              }
    }

    const onChange = (e)=>{
        setCred({...cred,[e.target.name]:e.target.value})
    }
    return (
        <div className='login'>
            <h1>Fudo. <span className='sign_red'>Sign In</span></h1>
            <div className="loginBox">
                <form onSubmit={handleClick}>

                    <div className="mb-3">
                        <label for="username" className="form-label">Email address*</label>
                        <input required type="email" className="form-control" value={cred.username} id="username" name='username' onChange={onChange} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label for="password" className="form-label">Password*</label>
                        <input required type="password" className="form-control" value={cred.password} id="password" name='password' onChange={onChange}  />
                    </div>
                    <div className="mb-3">
                        <Link to="">Forgot Password?</Link>

                    </div>
                    <div className="errbox d-none">
                        <p style={{ color: 'red', fontSize: '14px' }}>Invalid user credentials!</p>
                    </div>
                    <button type="submit" className="btn btn-danger" style={{
                        background:
                            'rgb(254, 56, 56)', fontWeight: '600', transition: 'all 0.2s'
                    }}>Login</button>
                </form>
            </div>
            <p>or <span onClick={()=>{Navigate('/signup')}} className='sign_red'>Sign up</span></p>

        </div>
    )
}
