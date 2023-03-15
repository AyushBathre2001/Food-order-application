import React, { useLayoutEffect, useRef } from 'react'
import pizza_slice from '../images/pizza_slice.png'
import delivery_guy from '../images/delivery_guy.png'
import food_model from '../images/food_model.png'
import rating_img from '../images/rating.png'
import Offer from './Offer'
import Popular from './Popular'
import Feedback from './Feedback'
import Blog from './Blog'
import Phone from './Phone'
import Subscribe from './Subscribe'
import Footer from './Footer'



export default function Main() {
  
  
  return (
    <>
    
    <div className='main'>
      <div className="left">
        <img alt=""  id='ps'/>
        <img alt=""  id='dg'/>
        <div className="infobox">
            <div className="qf mb-2">
                <h4>Quality food</h4>
            </div>
            <div className="text mb-3">
                <h1 >Fastest <br /> <span className='red_text'>Delivery</span> & <br /> Easy <span className='red_text'>Pickups</span></h1>
                <p>Best cooks and best delivery guys all at your service. Hot <br /> <span>tasty food will reach you in 60 minutes.</span> </p>
            </div>
            <form action="">
                <input type="text" placeholder='Enter your delivery location' />
                <button id='discover'>Discover</button>
            </form>

            <div className="reviewBox mt-4">
                <div className="img_box">
                  <div className="img_box_inside">
                    
                  </div>
                </div>
                <div className="rew_box">
                    <h4>Our Happy Customers</h4>
                    <h5>Best Food Delivery Platform</h5>
                    <h6>+12.5k review</h6>
                </div>
            </div>
        </div>
      </div>
      <div className="right">
       
        <div className="light_bg">
        <div className="rate_box">
          <div className="rate_box_left">
            <div className="rate_box_img">
                <img src="https://www.freeiconspng.com/uploads/pizza-png-15.png" alt="" />
            </div>
          </div>
          <div className="rate_box_right">
              <p className='mb-1'>Italian Pizza</p>
              <img src={rating_img} alt="" />
              <h6 className='mt-1'>Rs.550/-</h6>
          </div>
        </div>
          <div className="dark_bg">
            <img src={food_model} alt="" />
          </div>
        </div>
      </div>
    </div>
    <Offer/>
    <Popular/>
    <Feedback/>
    <Blog/>
    <Phone/>
    <Subscribe/>
    <Footer/>
    </>
  )
}
