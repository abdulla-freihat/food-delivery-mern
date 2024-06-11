import express from 'express';
import { placeOrder , verifyOrder , userOrders, listOrders , updateStatus } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";


const orderRouter = express.Router();

orderRouter.post('/place-order' , authMiddleware , placeOrder);

orderRouter.post('/verify-order' , verifyOrder);

orderRouter.post('/user-orders' , authMiddleware , userOrders );

orderRouter.get('/list-orders' , listOrders);

orderRouter.post('/update-status' , updateStatus);




export default orderRouter;
 