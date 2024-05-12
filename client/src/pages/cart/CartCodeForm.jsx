import React from 'react'

const CartCodeForm = () => {
  return (
    <div className='flex-1 order-1 md:order-2'>
         <form>
            <p className='text-gray-500'>If you have a promo code , enter it here.</p>
              <div className='mt-3 flex gap-1'>
            <input  type='text' placeholder='Promo Code'  className='p-1 rounded outline-none border w-full'/>
            <button className='rounded bg-black text-white py-1 px-4'>Submit</button>
            </div>
         </form>
    </div>
  )
}

export default CartCodeForm