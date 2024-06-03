import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useSearchParams , useNavigate } from 'react-router-dom'
import {StoreContext} from "../../context/StoreContext";
import axios from 'axios';

const VerifyOrder = () => {

     const [searchParams , setSearchParams] = useSearchParams();

     const success = searchParams.get("success");
     const orderId = searchParams.get("orderId");

     const {url} = useContext(StoreContext);

     const navigate= useNavigate();

     const verifyPayment = async()=>{

          const res = await axios.post(`${url}/api/order/verify-order` , {success , orderId});

          if(res.data.success){

                navigate('/my-orders');

          }else{
              navigate('/')
          }
         
     }


     useEffect(()=>{

         verifyPayment();
         
     })

  return (
    <div className='grid items-center justify-center h-screen '>

         <div className='w-[100px] h-[100px] self-center border-[5px] border-[#bdbdbd] border-t-orange-500 rounded-full animate-rotate'>
             
         </div>
         
    </div>
  )
}

export default VerifyOrder