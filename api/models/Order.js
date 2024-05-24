import mongoose from 'mongoose';


const {Schema ,model ,models} =mongoose;



 const orderSchema = new Schema({

       userId:{type:String , required:true},
       items:{type:Array , required:true},
       amount:{type:Number , required:true},
       address:{type:Object , required:true},
       status:{type:String , default:"Food Processing..." ,required:true},
       date:{type:Date , default:Date.now()},
       payment:{type:Boolean , default:false}
     
 } , {timestamps:true})



 const Order = models.Order || model("Order", orderSchema);
export default Order;