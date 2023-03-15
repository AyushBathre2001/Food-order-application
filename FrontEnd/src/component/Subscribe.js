
import React from 'react'


export default function Subscribe() {
  return (
    <div className='subscribe'>
      <div className="sub_left">
        <div className="sl_text">

        <h1>Subscribe Our Newsletter</h1>
        <p>Best cooks and best delivery guys all at your service. Hot <br /> tasty food will reach you in 60 minutes.</p>
        </div>

      </div>
      <div className="sub_right">
        <input type="text" placeholder='Your email address...' />
        <button id='subscribe'>Subscribe</button>
      </div>
    </div>
  )
}
