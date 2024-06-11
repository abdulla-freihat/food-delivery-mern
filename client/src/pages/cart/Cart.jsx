import React ,{useContext} from 'react'
import CartItems from './CartItems'
import { assets } from '../../assets/assets.js'

import {StoreContext} from "../../context/StoreContext.jsx"
import CartOrderDetails from './CartOrderDetails.jsx'
import { Link } from 'react-router-dom' 

const Cart = () => {

  const {food_list  , cartItems , removeFromCart , getCartTotalAmount , url} = useContext(StoreContext);

     
   const cartEmpty = ()=>{

    return Object.keys(cartItems).length===0 || Object.values(cartItems).every(count => count <= 0)
   }

  return (
    <div className='p-5 h-screen '>

    {cartEmpty() ?(

      <div className='flex flex-col justify-center items-center p-2 animate-fade'>
      <img src={assets.cart_empty_1}   alt=''/>
         
         
          <Link to='/' className='bg-orange-500 text-white px-8 py-2 rounded-md '>Go Home</Link>
      
        
      </div>
    )  :(
      <>
      <CartItems food_list={food_list} cartItems={cartItems}  removeFromCart={removeFromCart} url={url}  />

      <CartOrderDetails  getCartTotalAmount ={getCartTotalAmount} />
</>

       
    )}


       
    </div>
  )
}

export default Cart