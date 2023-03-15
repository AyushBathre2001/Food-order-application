import React, { useContext} from 'react'
import DishCard from './DishCard';

import dishcontext from '../context/dishesContext';
import { useNavigate } from 'react-router-dom';

export default function Popular() {

    const context = useContext(dishcontext)
    const { pdishArray } = context

    const Navigate = useNavigate()

    return (
        <div className='popular'>
            <div className="popular_heading">
                <h6>Our menu</h6>
                <h1>Our Popular Dishes</h1>

                <p>Best cooks and best delivery guys all at your service. Hot <br /> tasty food will reach you in 60 minutes.</p>

            </div>
            <div className="popular_dishes">
                {pdishArray.map((item, index) => {
                    return <div key={index} className="dcard">
                        <DishCard title={item.name} desc={item.desc} price={item.price} src={item.img} />

                    </div>
                })}
            </div>
            <button onClick={()=>{Navigate('/menu')}} className='menu_button'>See All Menu</button>
        </div>
    )
}
