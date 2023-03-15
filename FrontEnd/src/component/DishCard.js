import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import dishcontext from '../context/dishesContext'

export default function DishCard(props) {
  const { src, title, desc, price } = props
  const context = useContext(dishcontext)
  const { getDishProp } = context
  const Navigate = useNavigate()

  return (
    <div onClick={() => {
      getDishProp(title, desc, price, src)
      Navigate('/viewdish')
    }} className='dish_card'>
      <div className="upper">
        <div className="light_back"></div>
        <div className="img_circle">
          <img src={src} alt="" />
        </div>
        <div className="tag">New</div>
        <div className="fav"><i className="ri-heart-line"></i></div>
      </div>
      <div className="lower">

        <h3>{title}</h3>
        <p>{desc}</p>
        <h4>{price}</h4>
        <div className="cart"><i className="ri-handbag-line"></i></div>
      </div>
    </div>
  )
}
