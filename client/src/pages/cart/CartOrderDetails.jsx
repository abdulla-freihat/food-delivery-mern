import React from 'react'
import CartCodeForm from './CartCodeForm'
import { Link } from 'react-router-dom'

const CartOrderDetails = ({getCartTotalAmount}) => {
  return (
    <div className='max-w-6xl mx-auto'>
         <div className='my-12 flex flex-col md:flex-row    gap-12 '>

                <div className='flex-1 order-2 md:order-1'>
                     <h3 className='text-2xl text-orange-500 font-bold'>Cart Totals</h3>

                     <div className='flex flex-col gap-2 mt-4 '>
                         <div className='flex justify-between items-center'>
                            <p className='text-gray-500 '>SubTotal</p>
                            <p className='text-gray-600'>${getCartTotalAmount()}</p>
                         </div>
                         <hr />

                         <div className='flex justify-between'>
                            <p className='text-gray-500 '>Delivery Fee</p>
                            <p className='text-gray-600'>${getCartTotalAmount()=== 0 ? 0 : 8}</p>
                         </div>
                         <hr />

                         <div className='flex justify-between'>
                            <p className='text-gray-500 font-semibold' >Total</p>
                            <p className='text-gray-500 font-semibold'>${getCartTotalAmount()===0 ? 0 :getCartTotalAmount()+8}</p>
                         </div>
                         <hr />

                         <Link to='/order' className='bg-orange-500 text-center hover:bg-orange-600 font-semibold rounded p-2 text-white mt-4'>Proceed Checkout</Link>
                     </div>
                </div>

                 <CartCodeForm />
         </div>
    </div>
  )
}

export default CartOrderDetails