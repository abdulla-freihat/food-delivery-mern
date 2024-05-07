import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'

const FoodCard = ({item}) => {


    const [itemCount , setItemCount] = useState(0)
  return (
    <div  className='shadow rounded-lg  flex flex-col  gap-3 mt-8 animate-fade '> 

    <div className='relative'>

     <img src={item.image}   alt={item.name} className='bg-cover rounded-t-lg ' />
        
         {!itemCount   
             ? <img  onClick={()=>setItemCount((prev)=>prev+1)} src={assets.add_icon_white}  className='bg-white rounded-full shadow  text-center w-8 h-8 absolute  bottom-[5%] right-[5%] cursor-pointer'/>
             : <div  className='  bg-white p-1 rounded-full absolute  bottom-[5%] right-[5%] cursor-pointer flex items-center gap-2'>
             <img  onClick={()=>setItemCount((prev)=>prev-1)} src={assets.remove_icon_red} className='w-8 h-8' />
                 <p >{itemCount}</p>

                 <img  onClick={()=>setItemCount((prev)=>prev+1)} src={assets.add_icon_green} className='w-8 h-8' />

             </div>
         }              
     </div>

        <div className='p-2 flex flex-col gap-1'>

            <div className='flex justify-between items-center flex-col sm:flex-row gap-2 '>
              <h4 className='font-semibold'>{item.name}</h4>
               <img src={assets.rating_starts} className='w-20 h-4' />
            </div>

             <p className='text-gray-600 text-xs'>{item.description}</p>

             <span className='font-semibold text-orange-600'>${item.price}</span>
                 
        </div>
    
    </div>
  )
}

export default FoodCard