import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dishcontext from '../context/dishesContext'
import Menu from './Menu'

export default function ViewDish() {

  const context = useContext(dishcontext)
  const { dishProp, addOrder } = context
  const strPrice = dishProp.price
  const newPrice = strPrice.slice(1)
  const prc = Number(newPrice)
  const [price, setPrice] = useState(prc)
  const [quant, setQuant] = useState(1)
  const Navigate = useNavigate()

  const handleCount = (type) => {
    if (type === 'plus') {
      setQuant(quant + 1)
      setPrice(price + prc)
    }
    else if (type === 'minus') {
      if (quant === 1) {
        setQuant(1)

      }
      else {
        setQuant(quant - 1)
        setPrice(price - prc)

      }
    }
  }

  const add = () => {
    if (!localStorage.getItem('token')) {
      Navigate('/login')

    }
    else {
      addOrder(dishProp.title, dishProp.desc, price, quant, dishProp.src)
      Navigate('/cart')

    }
  }

  return (
    <>
      <div className='viewdish'>
        <div className="dishbox">
          <div className="db_left">
            <div className="dishimg">
              <img src={dishProp.src} alt="" />
            </div>
          </div>

          <div className="db_right">
            <div className="dishtxt">
              <h1>{dishProp.title}</h1>
              <p>{dishProp.desc}</p>
              <div className="tags">
                <button>Spicy</button>
                <button className='mx-2'>Hot</button>
                <button>Tasty</button>
                <button className='mx-2'>Popular</button>
              </div>
            </div>

            <div className="qty-container">
              <button onClick={() => { handleCount('minus') }} className="qty-btn-minus btn-light" type="button"><i className="ri-subtract-line"></i></button>
              <input onChange={() => { }} type="text" name="qty" value={quant} className="input-qty" />
              <button onClick={() => { handleCount('plus') }} className="qty-btn-plus btn-light" type="button"><i className="ri-add-line"></i></button>
            </div>
            <h4>${price}</h4>
            <button onClick={add} id='add'>Add</button>

          </div>
        </div>
      </div>


    </>
  )
}
