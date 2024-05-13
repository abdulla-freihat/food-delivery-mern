import express from 'express'
import {addFood  , getFood} from "../controllers/foodController.js"

import multer from 'multer';

 

const foodRouter  = express.Router();


//image upload storage

const storage = multer.diskStorage({

       destination:'uploads',
       filename:(req, file ,cb)=>{

              return cb(null , `${Date.now()}${file.originalname}`)
       }

})


const upload = multer({storage:storage})


foodRouter.post('/add' , upload.single('image') ,addFood)
foodRouter.get('/food-list' ,  getFood);



export default foodRouter;


 