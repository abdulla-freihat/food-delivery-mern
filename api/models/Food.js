import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

 const foodSchema = new Schema({

    name:{

         type:String,
         required:true
    } ,
    description:{
         type:String,
         required:true
    },
     price:{
         type:Number,
         required:true
    },
    image:{
         type:String,

    },
    category:{
       type:String,
       required:true     
    }

          
 } ,{timestamps : true})


 const Food = models.Food || model("Food", foodSchema);

export default Food;