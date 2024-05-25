import express from 'express';
import cors from 'cors';
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';
import userRouter from './routes/userRoutes.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import "dotenv/config";



 //app config

  const app = express();

  const port = 8000;


  //middleware

   app.use(express.json()); // used to get the request from frontend to backend
   app.use(cors()); // access the backend from any frontend


   app.get('/' , (req, res)=>{

     res.send('Api Working.')
    } )



    //DB connection
     connectDb();


      //api endpoints

        app.use('/api/food' , foodRouter);
        app.use('/images' , express.static('uploads'));
        app.use('/api/user' , userRouter);
        app.use('/api/cart' , cartRouter);
        app.use('/api/order' , orderRouter);



    app.listen(port , ()=>{

           console.log(`Server is running on http://localhost:${port}`)
    })



