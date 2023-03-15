import React from 'react'
import { useNavigate } from 'react-router-dom'
import offer_pizza from '../images/offer_pizza.png'
import rating_img from '../images/rating.png'


export default function Offer() {
    const Navigate = useNavigate()
    return (
        <div className='offer'>
            <div className="offer_left">

                <img src={offer_pizza} alt="" />
                <div className="offer_rate_box">
                    <div className="rate_box_left">
                        <div className="offer_rate_box_img">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                        </div>
                    </div>
                    <div className="rate_box_right">
                        <p className='mb-1'>Sarah Taylor</p>
                        <h6 className='mt-1'>Healthy and Delicious Pizza</h6>
                        <img src={rating_img} alt="" />
                    </div>

                </div>
                </div>
                <div className="offer_right">
                    <div className="discount mb-2">
                        <p>-50%</p>
                    </div>
                    <div className="offer_right_text">
                        <h1 >Pizza Special Offer</h1>
                        <p>Best cooks and best delivery guys all at your service. Hot <br /> tasty food will reach you in 60 minutes.</p>

                    </div>
                    <button onClick={()=>{Navigate('/menu')}} className='menu_button mt-2'>See All Menu</button>
                </div>
            </div>
            )
}
