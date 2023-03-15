import { useEffect, useState } from 'react'
import DishesContext from './dishesContext'

const DishesState = (props) => {

  const arrInitial1 = []
  const arrInitial2 = []
  const arrInitial3 = []

  const [pdishArray, setDishArray] = useState(arrInitial1)
  const [menuArray, setMenuArray] = useState(arrInitial2)
  let [cartList,setCartList] = useState(arrInitial3)


  const addOrder = (name,desc,price,quant,src)=>{
      const order = {name:name,desc:desc,price:price,quant:quant,src:src}
      setCartList(cartList.concat(order))
  }

  const deleteOrder = (id)=>{
     let newArr = []
     for (let i = 0; i < cartList.length; i++) {
      const element = cartList[i];
      if(i != id){
        newArr.push(element)
      }
      
     } 
      setCartList(newArr)
  }


  const [dishProp,setDishProp] = useState( {
    title: '',
      desc: '',
        price: '',
          src: ''
  })

  const getDishProp = (title,desc,price,src)=>{
    setDishProp({title,desc,price,src})
  }

  const popularDishes = async () => {
    const response = await fetch('http://localhost:5500/fetch/populardishes', {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json'
      },
    });

    const val = await response.json()
    if (val.success === true) {
      setDishArray(val.list)
    }

  }

  const menuDishes = async () => {
    const response = await fetch('http://localhost:5500/fetch/menudishes', {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json'
      },
    });

    const val = await response.json()
    if (val.success === true) {
      setMenuArray(val.list)
    }

  }

  useEffect(() => {
    popularDishes()
    menuDishes()
  }, [])

  return (
    <DishesContext.Provider value={{ pdishArray, popularDishes, menuArray ,getDishProp,dishProp,addOrder,cartList,deleteOrder }}>
      {props.children}
    </DishesContext.Provider>
  )
}

export default DishesState