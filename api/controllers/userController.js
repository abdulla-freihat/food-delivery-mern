import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import User from "../models/User.js";

//create token

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register user

const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    //if the user already exists in the database
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    //validate email format and strong password

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter a valid email" });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters.",
      });
    }

    // hash user password

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    return res
      .status(201)
      .json({ success: true, message: "User created successfully", token });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

//login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email" });
    }

      const isMatch = await bcrypt.compare(password , user.password);

      if(!isMatch){

        return res
        .status(400)
        .json({ success: false, message: "Invalid password . try again" });
      }


       const token = createToken(user._id);

       return res
      .status(201)
      .json({ success: true, message: "Sign in successfully", token });

        

  } catch (err) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export { registerUser, loginUser };
