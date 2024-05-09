import React from 'react'
import { Link } from 'react-router-dom'

import { assets } from '../assets/assets'
const Page404 = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen p-2'>
         <div className='flex flex-col gap-5 animate-fade '>
             <img  src={assets.logo404} alt='404' className='w-48 mx-auto'/>
               
               <h2 className='font-bold text-gray-600 text-2xl'>Sorry , Page Not Found</h2>
               <Link to='/' className='text-white text-center font-bold bg-orange-500 hover:bg-orange-600 rounded p-2'>Go Home</Link>
         </div>
    </div>
  )
}

export default Page404