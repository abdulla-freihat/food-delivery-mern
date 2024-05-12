import React from 'react'

const CartItems = ({food_list  , cartItems , removeFromCart}) => {
  return (
    <div className='max-w-6xl mx-auto '>

          <div className='my-5'>

            <h1 className='text-2xl mb-12 font-bold text-orange-500'>Your Cart</h1>

            <div className='hidden  sm:flex justify-between   text-gray-600 font-semibold'>
                 <p>Items</p>
                 <p>Title</p>
                 <p>Price</p>
                 <p>Quantity</p>
                 <p>Total</p>
                 <p>Remove</p>

                
            </div>

            <hr className='bg-gray-300 mt-5 h-[2px]'/>

               {food_list.map((item , index)=>{

                      if(cartItems[item._id] >0){

                          return(
                                 <>
                             <div key={index} className='flex flex-col gap-2 sm:flex-row justify-between items-center my-4'>
                               <img src={item.image} alt={item.name} className='w-20 rounded-md' />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>x{cartItems[item._id]}</p>
                                <p>${item.price * cartItems[item._id]}</p>
                                <button className='rounded bg-red-500 hover:bg-red-600 text-white p-2'>Remove</button>
                             </div>
                             <hr className='bg-gray-300 mt-5 '/>
                             </>

                          )
                      }
               })}

          </div>


          
    </div>
  )
}

export default CartItems