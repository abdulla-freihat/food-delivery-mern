import React ,{useContext} from 'react'
import CartItems from './CartItems'

import {StoreContext} from "../../context/StoreContext.jsx"
import CartOrderDetails from './CartOrderDetails.jsx'

const Cart = () => {

  const {food_list  , cartItems , removeFromCart , getCartTotalAmount} = useContext(StoreContext);

  return (
    <div className='p-5 '>
        <CartItems food_list={food_list} cartItems={cartItems}  removeFromCart={removeFromCart}  />

        <CartOrderDetails  getCartTotalAmount ={getCartTotalAmount} />

       
    </div>
  )
}

export default Cart