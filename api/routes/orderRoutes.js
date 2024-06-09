import express from 'express';
import { placeOrder , verifyOrder , userOrders, listOrders } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";


const orderRouter = express.Router();

orderRouter.post('/place-order' , authMiddleware , placeOrder);

orderRouter.post('/verify-order' , verifyOrder);

orderRouter.post('/user-orders' , authMiddleware , userOrders );

orderRouter.get('/list-orders' , listOrders);




export default orderRouter;
 