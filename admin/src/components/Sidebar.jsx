import React from 'react'
import { assets } from '../assets/assets'
import {Link , useLocation} from 'react-router-dom'



const Sidebar = () => {

    const location = useLocation();
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='pt-[50px] pl-[20%] flex flex-col gap-4 '>
            <Link to='/add' className={`  ${location.pathname === "/add" ? "border-orange-500 bg-[#fff0ed]" : ""}    flex gap-2 items-center border-2 border-r-0 p-2 cursor-pointer rounded-l  `}>
                  <img src={assets.add_icon} />
                  <p className='hidden lg:flex'>Add Items</p>
            </Link>


            <Link to='/list' className={`  ${location.pathname === "/list" ? "border-orange-500 bg-[#fff0ed]" : ""}    flex gap-2 items-center border-2 border-r-0 p-2 cursor-pointer   rounded-l `}>
                  <img src={assets.order_icon} />
                  <p className='hidden lg:flex'>List Items</p>
            </Link>



            <Link to='/orders' className={`  ${location.pathname === "/orders" ? "border-orange-500 bg-[#fff0ed]" : ""}    flex gap-2 items-center border-2 border-r-0 p-2 cursor-pointer  rounded-l  `}>
                  <img src={assets.order_icon} />
                  <p className='hidden lg:flex'>Orders</p>
            </Link>

           
        </div>
    </div>
  )
}

export default Sidebar