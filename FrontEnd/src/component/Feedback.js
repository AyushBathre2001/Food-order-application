import React from 'react'


export default function Feedback() {
 

  
  return (
    <div className='feedback'>
      <div className="arrow_left">
        <i className="ri-arrow-left-s-line"></i>
      </div>
      <div className="client_text">
        <h4>Testimonial</h4>
        <h1 className='mb-5'>What Our Clients Say</h1>
        <img src="https://www.pngitem.com/pimgs/m/10-108237_comillas-transparent-double-quotes-png-png-download.png" alt="" />
        <p  className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam, aut cupiditate ex, iure, repellendus magni dolore natus omnis veniam nobis ut corporis velit perferendis itaque tempore soluta id libero?</p>
        <div className="client mt-4">
          <div className="client_img"></div>
          <div className="client_name">
            <h5>Shane Watson</h5>
          </div>
        </div>
      </div>
      <div className="arrow_right">
        <i className="ri-arrow-right-s-line"></i>
      </div>
    </div>
  )
}
