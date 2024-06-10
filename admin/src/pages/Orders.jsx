import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";


const Orders = () => {
  const [orders, setOrders] = useState([]);

  const url = "http://localhost:8000";

  const fetchOrders = async () => {
    const res = await axios.get(`${url}/api/order/list-orders`);

    if (res.data.success) {
      setOrders(res.data.data);
    }else{

       toast.error('Error');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return( 
  
  <div className="w-full">

       <div className="flex flex-col gap-5 mx-5 mt-5">
       <p className="text-gray-500 font-bold text-xl">All Orders List</p>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders available</p>
        ):(

          <div>
            
            {orders.map((order , index)=>(

                 <div key={index} className="flex justify-between items-center flex-wrap gap-8 border border-orange-500 p-5 m-5">

                  <img src={assets.parcel_icon} alt='' />

                  <div className="text-sm text-[#454545]">
                   <p className=" font-bold mb-5 ">
                     {order.items.map((item,index)=>{

                          if(index === order.items.length-1){

                             return item.name + " x " + item.quantity
                          } else{

                            return item.name + " x " + item.quantity + " , "

                          }
                     })}
                   </p>
                   <p className="font-semibold">{order.address.firstName + " " + order.address.lastName}</p>
                    <div className="mb-5">
                       <p>{order.address.street + ' , '}</p>
                        <p>{order.address.city + " , " + order.address.state + " , " + order.address.country + " , " + order.address.zipCode}</p>
                    </div>

                    <p>{order.address.phone}</p>
                    

                  </div>

                    <p className="text-sm text-[#454545]">Items : {order.items.length}</p>
                    <p className="text-sm text-[#454545] font-semibold">${order.amount}</p>

                    <select className="p-2 bg-[#ffe8e4] border outline-none">
                           <option className="Food Processing...">Food Processing</option>
                           <option className="Out">Out Of Delivery</option>
                           <option className="Delivered">Delivered</option>
                    </select>

                 </div>
            ))}

          </div>


        )}

       </div>
  </div>
  
);
};

export default Orders;
