const authService = require("../services/authService");

// Controller function to handle user sign up
const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await authService.signUp(username, email, password);
    if (!username || !email || !password) {
      res.status(400).json({ message: "All Fields are Required" });
    }
    res
      .status(201)
      .json({ message: "User registered successfully", data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    if (!email || !password) {
      res.status(400).json({ message: "All Fields are Required" });
    }
    res.status(200).json({ message: "Login Successful", data: result });
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

module.exports = {
  signUp,
  login
};
