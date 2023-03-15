import React from 'react'

export default function Footer() {
    return (
        <>
        <div className='footer'>
            <div className="f_left">
                <div className="f_text">

                    <h3>Fudo.</h3>
                    <p>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
                <div className="icons">
                    <div className="ic"><i className="ri-facebook-fill"></i></div>
                    <div className="ic mx-3"><i className="ri-twitter-fill"></i></div>
                    <div className="ic"><i className="ri-linkedin-fill"></i></div>
                </div>
                </div>
            </div>
            <div className="f_right">
                <div className="col1 col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="">Career</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Press info</a></li>
                        <li><a href="">Features</a></li>
                    </ul>
                </div>
                <div className="col2 col">
                    <h4>Fudo</h4>
                    <ul>
                        <li><a href="">Why Fudo </a></li>
                        <li><a href="">How it works</a></li>
                        <li><a href="">Why choose us</a></li>
                        <li><a href="">Client stories</a></li>
                        <li><a href="">Gallery</a></li>
                    </ul>
                </div>
                <div className="col3 col">
                    <h4>Menu</h4>
                    <ul>
                        <li><a href="">Breakfast</a></li>
                        <li><a href="">Lunch</a></li>
                        <li><a href="">Dinner</a></li>
                        <li><a href="">Fast foods</a></li>
                        <li><a href="">Drinks</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Copyright 2023 Besnik All Rights Reserved</p>
            <div className="terms">
                <p>Terms</p>
                <p className='mx-4'>Privacy</p>
                <p>Security</p>
            </div>
        </div>
        </>
    )
}
