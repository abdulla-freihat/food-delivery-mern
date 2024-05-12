import React , {useContext} from 'react'

 import {StoreContext} from '../../context/StoreContext'
 
 import { Link } from 'react-router-dom';
const Order = () => {


      const {getCartTotalAmount} = useContext(StoreContext);

  return (
   <div className='h-screen py-20 px-5 max-w-6xl mx-auto'>

         <form className='flex flex-col md:flex-row gap-8 items-center justify-between'>


                <div className='flex  flex-col gap-3 flex-1'>
                <h1 className='text-2xl mb-12 font-bold text-orange-500'>Delivery Information</h1>

            <div className='flex gap-2'>
                 <input type='text'   placeholder='First Name' className='outline-none rounded-sm border-2 p-1 w-full'/>
                 <input type='text'   placeholder='Last Name'  className='outline-none rounded-sm border-2 p-1 w-full'/>
            </div>

            <div className=''>
            <input type='email'   placeholder='Email Address' className='outline-none rounded-sm border-2 p-1 w-full '/>

            </div>

            <div className=''>
                 <input type='text'   placeholder='Street' className='outline-none rounded-sm border-2 p-1 w-full '/>
            </div>


            <div className='flex gap-2'>
                 <input type='text'   placeholder='State' className='outline-none rounded-sm border-2 p-1 w-full '/>
                 <input type='text'   placeholder='City'  className='outline-none rounded-sm border-2 p-1  w-full'/>
            </div>


            <div className='flex gap-2'>
                 <input type='text'   placeholder='Zip Code' className='outline-none rounded-sm border-2 p-1 w-full '/>
                 <input type='text'   placeholder='Country'  className='outline-none rounded-sm border-2 p-1 w-full'/>
            </div>


            <div className=''>
                 <input type='text'   placeholder='Phone' className='outline-none rounded-sm border-2 p-1 w-full '/>
            </div>



</div>



<div className='flex-1 w-full  '>
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

                         <Link to='/order' className='bg-orange-500 text-center hover:bg-orange-600 font-semibold rounded p-2 text-white mt-4'>Proceed Payment</Link>
                     </div>
                </div>
             
         </form>

   </div>
  )
}

export default Order