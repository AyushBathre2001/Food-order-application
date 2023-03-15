import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dishcontext from '../context/dishesContext'

export default function Confirm() {

    const context = useContext(dishcontext)
    const {cartList} = context
    const Navigate = useNavigate()

    const [cstm,setCstm] = useState({name:'',phone:'',address:''})

    const handleOrder = async (e)=>{
        e.preventDefault()

        const response = await fetch('http://localhost:5500/customer/confirm/order', {
            method: 'POST',
      
            headers: {
              'Content-Type': 'application/json',
              'token':localStorage.getItem('token')
            },
            body: JSON.stringify({"name":cstm.name,"phone":cstm.phone,"address":cstm.address,"order":cartList,"total":localStorage.getItem('total')}) 

          });

          const value = await response.json()
          localStorage.removeItem('total')
          if(value.success === true){
            Navigate('/done')
          }
    }

    const onChange = (e)=>{
        setCstm({...cstm,[e.target.name]:e.target.value})
    }
    return (
        <div className='confirm'>
            <h1>Confirm Order</h1>
            <form onSubmit={handleOrder}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name*</label>
                    <input type="text" value={cstm.name} onChange={onChange} className="form-control" id="name" name='name' aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Phone*</label>
                    <input type="number" value={cstm.phone} onChange={onChange} className="form-control" id="phone" name='phone' aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="address" className="form-label">Address*</label>
                    <textarea className="form-control" value={cstm.address} onChange={onChange} id="address" name='address'/>
                </div>
             
                <button type="submit" className="btn btn-success">Confirm </button>
            </form>
        </div>
    )
}
