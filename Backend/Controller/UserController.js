const User = require("../Models/User");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "Please fill all the fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    // Check if password is correct

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }
    user.password = undefined;
    return res.status(200).send({
      success: true,
      message: "Login successful",
      user: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .send({ sucess: false, message: "Please fill all the fields" });
    }
    // Check if user already exists
    const exsistingUser = await User.findOne({ email });
    if (exsistingUser) {
      return res.status(400).json({ message: "User email already exists" });
    }
    // Create new user
    const user = new User({ name, email, password });
    // Save user
    await user.save();
    return res
      .status(200)
      .send({ success: true, message: "registration succesfull please login" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error " });
  }
};

module.exports = { registerController, loginController };
