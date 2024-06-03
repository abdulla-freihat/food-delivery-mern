import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Order = () => {
  const { getCartTotalAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };


  

  const submitHandler = async (e) => {
    e.preventDefault();

    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

     
    let orderData = {
      address:data,
      items : orderItems,
      amount : getCartTotalAmount() +2
    }



    let res = await axios.post(`${url}/api/order/place-order` , orderData , {headers:{token} });

    if(res.data.success){

      const {session_url} = res.data;
      window.location.replace(session_url) // sending the user to session_url
    }else{

      alert("Error");
    }

    
  };

  return (
    <div className='h-screen py-20 px-5 max-w-6xl mx-auto'>
      <form onSubmit={submitHandler} className='flex flex-col md:flex-row gap-8 items-center justify-between'>
        <div className='flex flex-col gap-3 flex-1'>
          <h1 className='text-2xl mb-12 font-bold text-orange-500'>Delivery Information</h1>

          <div className='flex gap-2'>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              className='outline-none rounded-sm border-2 p-1 w-full'
              value={data.firstName}
              onChange={onChangeHandler}
              required
            />
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              className='outline-none rounded-sm border-2 p-1 w-full'
              value={data.lastName}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className=''>
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              className='outline-none rounded-sm border-2 p-1 w-full'
              value={data.email}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className=''>
            <input
              type='text'
              name='street'
              placeholder='Street'
              className='outline-none rounded-sm border-2 p-1 w-full'
              value={data.street}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className='flex gap-2'>
            <input
              type='text'
              name='state'
              placeholder='State'
              className='outline-none rounded-sm border-2 p-1 w-full'
              value={data.state}
              onChange={onChangeHandler}
              required
            />
            <input
              type='text'
              name='city'
              placeholder='City'
              className='outline-none rounded-sm border-2 p-1 w-full'
              value={data.city}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className='flex gap-2'>
            <input
              type='text'
              name='zipCode'
              placeholder='Zip Code'
              className='outline-none rounded-sm border-2 p-1 w-full'
              value={data.zipCode}
              onChange={onChangeHandler}
              required
            />
            <input
              type='text'
              name='country'
              placeholder='Country'
              className='outline-none rounded-sm border-2 p-1 w-full'
              value={data.country}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className=''>
            <input
              type='text'
              name='phone'
              placeholder='Phone'
              className='outline-none rounded-sm border-2 p-1 w-full'
              value={data.phone}
              onChange={onChangeHandler}
              required
            />
          </div>
        </div>

        <div className='flex-1 w-full'>
          <h3 className='text-2xl text-orange-500 font-bold'>Cart Totals</h3>

          <div className='flex flex-col gap-2 mt-4'>
            <div className='flex justify-between items-center'>
              <p className='text-gray-500'>SubTotal</p>
              <p className='text-gray-600'>${getCartTotalAmount()}</p>
            </div>
            <hr />

            <div className='flex justify-between'>
              <p className='text-gray-500'>Delivery Fee</p>
              <p className='text-gray-600'>${getCartTotalAmount() === 0 ? 0 : 8}</p>
            </div>
            <hr />

            <div className='flex justify-between'>
              <p className='text-gray-500 font-semibold'>Total</p>
              <p className='text-gray-500 font-semibold'>${getCartTotalAmount() === 0 ? 0 : getCartTotalAmount() + 8}</p>
            </div>
            <hr />

            <button type='submit' className='bg-orange-500 text-center hover:bg-orange-600 font-semibold rounded p-2 text-white mt-4'>
              Proceed Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Order;
