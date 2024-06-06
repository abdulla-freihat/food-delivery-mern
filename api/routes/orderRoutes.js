import express from 'express';
import { placeOrder , verifyOrder , userOrders } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";


const orderRouter = express.Router();

orderRouter.post('/place-order' , authMiddleware , placeOrder);

orderRouter.post('/verify-order' , verifyOrder);

orderRouter.post('/user-orders' , authMiddleware , userOrders );




export default orderRouter;
 