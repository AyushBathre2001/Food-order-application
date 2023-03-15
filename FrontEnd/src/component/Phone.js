
import phone_img from '../images/phone.png'
import React from 'react'


export default function Phone() {

    return (
        <div className='phone'>
            <div className="phone_left">
                <img src={phone_img} alt="" />
            </div>
            <div className="phone_right">
                <h3>Our mobile app</h3>
                <h1 >Download our mobile app</h1>
                <p>Best cooks and best delivery guys all at your service. Hot <br /> tasty food will reach you in 60 minutes.</p>
                <div className="download mt-3">

                    <div className="store">
                        <i className="ri-app-store-fill"></i>
                        <h5>App Store</h5>
                    </div>
                    <div className="store mx-3">
                        <i className="ri-google-play-fill"></i>
                        <h5>Play Store</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
