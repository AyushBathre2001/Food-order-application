import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import dishcontext from '../context/dishesContext'
import DishCard from './DishCard'

export default function Cart() {
    const Navigate = useNavigate()
    const context = useContext(dishcontext)
    let { pdishArray, cartList,deleteOrder } = context
    let total = 0
    for (let i = 0; i < cartList.length; i++) {
        const element = cartList[i];
        total = total + element.price
        
    }

    const handleOrder = ()=>{
        localStorage.setItem('total',total)
        Navigate('/confirm')
    }

    const handleDelete = (e)=>{
        const id = e.target.id
        deleteOrder(id)
    }
    return (
        <div className='order_cart'>
            <div className="side_menu">
                <div className="recom">
                    <h3>Popular</h3>
                </div>
                <div className="recom_menu">
                    {pdishArray.map((item, index) => {
                        return <div key={index} className="r_card">
                            <DishCard title={item.name} desc={item.desc} price={item.price} src={item.img} />

                        </div>
                    })}
                </div>
            </div>
            <div className="cart_list">
                <div className="cl_head">
                    <h3>Fudo. <span style={{ color: 'red' }}>Order list</span></h3>

                </div>
                <div className="lst">
                    {cartList.map((item,index) => {
                        return <div key={index} className="lst_row">
                            <div className="lst_left">
                                <div className="lst_left_img">
                                    <img src={item.src} alt="" />
                                </div>
                            </div>
                            <div className="lst_right">
                                <div className="lst_right_dname">
                                    <h3>{item.name}</h3>
                                    <p className='mx-5'>{item.desc}</p>
                                </div>
                                <div className="dish_info">
                                    <h5 className='mx-5'>{item.quant}</h5>
                                    <h5>${item.price}</h5>
                                </div>
                                <div className="del_item">
                                    <i onClick={handleDelete} id = {index}  className="ri-close-circle-line"></i>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="total">
                    <div className="total_head">
                        <p>Best cooks and best delivery guys all at your service. Hot <br /> tasty food will reach you in 60 minutes.</p>

                    </div>
                    <div className="order_item">
                        <h3>Total: ${total}</h3>
                        <button onClick={handleOrder}>Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
