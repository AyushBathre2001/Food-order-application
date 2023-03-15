import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar() {

  const Navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    Navigate('/login')
  }
  return (
    <div className='Navbar'>
      <div div className="logo" >
        <h3>Fudo.</h3>
      </div >
      <nav>
        <ul>
          <li><Link id='red' to="/">Home</Link></li>
          <li><Link to="">Review</Link></li>
          <li><Link to="">About us</Link></li>
          <li><Link to="">Contact us</Link></li>
        </ul>
      </nav>

      {
        !localStorage.getItem('token') ? <div className="auth">
          <button onClick={() => { Navigate('/login') }} id='login' className='mx-2'>Sign in</button>
          <button onClick={() => { Navigate('/signup') }} id='register'>Sign up</button>
        </div> :
          <div className="auth">
            <i onClick={()=>{Navigate('/cart')}} className="ri-shopping-bag-3-line mx-3"></i>
            <button onClick={handleLogout} id='logout'>Logout</button>
          </div>
      }

    </div >
  )
}
