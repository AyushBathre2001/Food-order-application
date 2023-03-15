import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const Navigate = useNavigate()
    const [details, setDetails] = useState({ name: "", email: "", password: "", cpassword: "" })
    const [errorMsg, setErrorMsg] = useState({ match: '', len: '' })
    
    const onChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    
    const validation = ()=>{
        setErrorMsg({match:'',len:''})
        if (details.password !== details.cpassword) {
            setErrorMsg({ match: 'please write correct password!' })
            return false
        }
        else if (details.password.length < 5) {
            setErrorMsg({ len: 'minimum length of password must be 5!' })
            return false
        }
        else{
            return true
        }
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const verify = validation()
        if(verify){
            const response = await fetch('http://localhost:5500/auth/signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({"name":details.name,"email":details.email,"password":details.password}) 
              });
              const value = await response.json()
              if(value.success === true){
                Navigate('/login')
              }
            
        }
    
    }

    return (
        <div className='register'>
            <h1>Fudo. <span className='sign_red'>Sign up</span></h1>
            <div className="signupBox">
                <form onSubmit={handleClick}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name*</label>
                        <input required type="text" className="form-control" value={details.name} id="name" name='name' aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address*</label>
                        <input required type="email" className="form-control" value={details.email} id="email" name='email' aria-describedby="emailHelp" onChange={onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label for="password" className="form-label">Password*</label>
                        <input required type="password" className="form-control" value={details.password} id="password" name='password' onChange={onChange} />
                        <p style={{ color: 'red', fontSize: '13px' }}>{errorMsg.len}</p>
                    </div>

                    <div className="mb-3">
                        <label for="cpassword" className="form-label">Confirm password*</label>
                        <input required type="password" className="form-control" value={details.cpassword} id="cpassword" name='cpassword' onChange={onChange} />
                        <p style={{ color: 'red', fontSize: '13px' }}>{errorMsg.match}</p>
                    </div>
                    <button type="submit" className="btn btn-danger" style={{
                        background:
                            'rgb(254, 56, 56)', fontWeight: '600', transition: 'all 0.2s'
                    }}>Sign up</button>
                </form>

            </div>
            <p>or <span onClick={() => Navigate('/login')} className='sign_red'>login</span></p>
        </div>
    )
}
