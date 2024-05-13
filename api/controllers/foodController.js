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


export {addFood}