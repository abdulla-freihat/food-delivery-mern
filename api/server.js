import express from 'express';
import cors from 'cors';




 //app config

  const app = express();

  const port = 8000;


  //middleware

   app.use(express.json()); // used to get the request from frontend to backend
   app.use(cors()); // access the backend from any frontend


   app.get('/' , (req, res)=>{

     res.send('Api Working.')
    } )


    app.listen(port , ()=>{

           console.log(`Server is running on http://localhost:${port}`)
    })



