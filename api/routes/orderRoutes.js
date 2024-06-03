import express from 'express';
import { placeOrder , verifyOrder } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";


const orderRouter = express.Router();

orderRouter.post('/place-order' , authMiddleware , placeOrder);

orderRouter.post('/verify-order' , verifyOrder)




export default orderRouter;
 