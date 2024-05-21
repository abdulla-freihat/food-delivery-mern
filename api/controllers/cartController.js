import User from "../models/User.js";

// add item to user cart

const addToCart = async (req, res) => {
  try {
    let userData = await User.findById(req.body.userId);

    let cartData = await userData.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await User.findByIdAndUpdate(req.body.userId, { cartData });

    return res.status(201).json({ success: true, message: "Added to cart" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error" });
  }
};

// remove item from user cart

const removeFromCart = async (req, res) => {
  try {
    let userData = await User.findById(req.body.userId);

    let cartData = await userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await User.findByIdAndUpdate(req.body.userId, { cartData });

    return res
      .status(201)
      .json({ success: true, message: "Removed from cart" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error" });
  }
};

// get  user cart data

const getCart = async (req, res) => {
  try {

       let userData = await User.findById(req.body.userId);

        let cartData = await userData.cartData;

        return res
      .status(201)
      .json({ success: true, cartData});
        

  } catch (err) {
    res.status(500).json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
