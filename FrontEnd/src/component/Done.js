import React from 'react'
import food from '../images/food-eat.gif'

export default function Done() {
  return (
    <div className='done'>
      <div className="done_box">
        <h1>Fudo.</h1>
        <h2>Order has been confirmed!</h2>
        <img src={food} alt="" />
        <h2>Order will be delivered to your address.</h2>
        <p>Best cooks and best delivery guys all at your service. Hot <br /> tasty food will reach you in 60 minutes.</p>

      </div>
    </div>
  )
}
