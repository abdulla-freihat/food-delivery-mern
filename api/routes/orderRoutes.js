import express from 'express';
import { placeOrder } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";


const orderRouter = express.Router();

orderRouter.post('/placer-order' , authMiddleware , placeOrder);




export default orderRouter;
 