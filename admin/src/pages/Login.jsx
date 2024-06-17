import React ,{useState , useContext} from "react";
import { assets } from "../assets/assets";
import axios from 'axios';
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const url = "http://localhost:8000";
    const navigate  = useNavigate();

    const {setToken} = useContext(AuthContext)

    const [data , setData] = useState({

         email: '',
         password:''
    })
    

    const onChangeHandler = (e)=>{
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    }


    const  submitHandler = async(e)=>{

           e.preventDefault();

           try{

              const res = await axios.post(`${url}/api/user/login` , data)

               if(res.data.success){

                setToken(res.data.token);
                localStorage.setItem("token", res.data.token);
                   
                navigate('/admin')
              
                toast.success(res.data.message);
               }  else {
                toast.error(res.data.message);
              }

           }catch(err){

            toast.error("An unexpected error occurred.");
           }
    }
      


  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-2 ">
       <img src={assets.logo}  />
      <div className="bg-white rounded shadow text-gray-600  p-6 max-w-6xl">
        <h1 className="font-bold text-xl">Login As Admin</h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-3 my-5">
          <input
            className={`border outline-none rounded p-2`}
            type="email"
            name="email"
            placeholder="Your Email"
            value={data.email}
            onChange={onChangeHandler}
          />

          <input
            className={`border outline-none rounded p-2`}
            type="password"
            name="password"
            placeholder="Your Password"
            value={data.password}
            onChange={onChangeHandler}
          />

          <button type='submit' className="bg-orange-500 hover:bg-orange-600 text-white rounded p-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
