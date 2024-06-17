import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import User from "../models/User.js";

// Create token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        errors: { email: "User already exists" }
      });
    }

    // Validate email format and password strength
    let errors = {};
    if (!validator.isEmail(email)) {
      errors.email = "Please enter a valid email";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        errors
      });
    }

    // Hash the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      token
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password ,isAdmin } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        errors: { email: "Invalid email . Please sign up" }
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        errors: { password: "Invalid password. Try again" }
      });
    }

    const token = createToken(user._id);
    return res.status(201).json({
      success: true,
      message: "Sign in successfully",
      token,
     isAdmin: user.isAdmin
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error",
     
    });
  }
};

export { registerUser, loginUser };

