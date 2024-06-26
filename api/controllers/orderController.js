import Order from "../models/Order.js";
import User from "../models/User.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//place user order from frontend

const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";

  try {
    const newOrder = new Order({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();
    await User.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },

      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Charges",
        },

        unit_amount: 2 * 100,
      },

      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    return res.status(201).json({
      success: true,

      session_url: session.url,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  try {
    if (success === "true") {
      await Order.findByIdAndUpdate(orderId, { payment: "true" });

      return res.status(201).json({
        success: true,

        message: "Paid",
      });
    } else {
      await Order.findByIdAndDelete(orderId);

      return res.status(400).json({
        success: false,

        message: "Not Paid",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

//user orders

const userOrders = async (req, res) => {
  try {
    const userOrders = await Order.find({ userId: req.body.userId });

    return res.status(201).json({
      success: true,

      data: userOrders,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

//listing orders for admin panel api route

const listOrders = async (req, res) => {
  try {

     const orders = await Order.find({});


     return res.status(201).json({
      success: true,

      data: orders,
    });


  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};


//

const updateStatus = async(req, res)=>{

   try{
          await Order.findByIdAndUpdate(req.body.orderId ,{status:req.body.status});

          return res.status(201).json({
            success: true,
      
            message:'Status Updated',
          });
      

       
   }catch(err){

    return res.status(500).json({
      success: false,
      message: "Error",
    });
  
   }


}

export { placeOrder, verifyOrder, userOrders, listOrders , updateStatus };
