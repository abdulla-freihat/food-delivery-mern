import React , {useState , useEffect , useContext} from 'react';

import { StoreContext } from '../../context/StoreContext';

import axios from 'axios';
import { assets } from '../../assets/assets';





const MyOrders = () => {

    const {url , token } = useContext(StoreContext);
    const [data , setData]  = useState([]);


     const fetchOrders = async ()=>{

           const res = await axios.post(`${url}/api/order/user-orders` ,{}, {headers : {token}});

           if(res.data.success){

              setData(res.data.data);
           }

         
     }


     useEffect(()=>{

          if(token){

             fetchOrders();
          }

     } , [token])


  return (
    <div className='h-screen max-w-6xl mx-auto my-[50px] p-2'>
        <h2 className='font-bold text-xl'>My Orders</h2>

        <div className='flex flex-col  gap-[20px] mt-[30px]'>

          {data.map((order , index)=>{

             return(

               <div key={index} className='flex justify-between items-center border p-4 flex-wrap gap-5 border-orange-500 text-sm text-[#454545]'>

                   <img src={assets.parcel_icon} alt='parcel-icon' />
                   <p className='text-sm '>{order.items.map((item ,index)=>{
                      
                      if(index === order.items.length-1){

                         return item.name + " x " + item.quantity
                      }else{

                        return item.name + " x " + item.quantity + " , "

                      }
                        
                   })}</p>

                   <p>${order.amount}.00</p>
                   <p>items: {order.items.length}</p>
                   <p><span className='text-orange-500 text-xl'>&#x25cf;</span> <b>{order.status}</b></p>
                   <button onClick={fetchOrders} className='bg-[#ffe1e1] py-2 px-6 cursor-pointer rounded'>Track Order</button>

               </div>
                 
             )
          })}

        </div>
    </div>
  )
}

export default MyOrders