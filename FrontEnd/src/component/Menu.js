import React, { useContext } from 'react'
import dishcontext from '../context/dishesContext'
import DishCard from './DishCard'


export default function Menu() {

  const context = useContext(dishcontext)
  const {menuArray} = context
  return (
    <div className='menu'>
      <div className="menu_heading">
       
            <h1>Our Special Menu</h1>
            <p>Best cooks and best delivery guys all at your service. Hot <br /> tasty food will reach you in 60 minutes.</p>

       
      </div>
      <div className="alldishes">
        {menuArray.map((item)=>{
          return <DishCard title = {item.name} desc = {item.desc} price = {item.price} src = {item.img}/>
        })}
      </div>
    </div>
  )
}
