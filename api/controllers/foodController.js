import Food from '../models/Food.js'

import fs from 'fs'


// add food POST
const addFood =async (req, res)=>{

     try{

           let image_filename = `${req.file.filename}`;

            const food = new Food({

                   name : req.body.name,
                   description : req.body.description,
                   price:req.body.price,
                   category: req.body.category ,
                   image : image_filename
            })

              await food.save();

               res.status(201).json({success: true , message:'Food Added Successfully'})
            

     }catch(err){

        res.status(500).json({success: false , message:'Error'});

     }
     
}


//all food list get

 const getFood = async(req, res)=>{

     try{

       const foodList = await  Food.find({});

          if(!foodList){

            res.status(404).json({success: false , message:'No food list found.'});

          }

          res.status(201).json({success: true , data:foodList})



     }catch(err){

      res.status(500).json({success: false , message:'Error!'})

     }
    
 }



   //remove food item  DELETE
   
   const removeFood = async(req ,res)=>{

      try{

         const food = await Food.findById(req.body.id);

          fs.unlink(`uploads/${food.image}` , ()=>{});

            
           await Food.findByIdAndDelete(req.body.id);


               res.status(201).json({success: true , message:'Food Deleted Successfully'})


      }catch(err){

         res.status(500).json({success: false , message:'Error!'})

      }
       
   }
export {addFood , getFood , removeFood}