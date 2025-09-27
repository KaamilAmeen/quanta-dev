const authRepository = require("../repositories/authRepository");
const pwdUtils = require("../utils/passwordUtils");
const authMiddleware = require("../middlewares/authMiddleware");

// Service function to handle user sign up
const signUp = async (username, email, password) => {
  try {
    const result = await authRepository.signUp(username, email, password);
    return result;
  } catch (err) {
    console.error({ error: err.message });
  }
};

// Service function to handle user login
const login = async (email, password) => {
  try {
    const [result] = await authRepository.getUserByEmail(email);
    if (result.length === 0) {
      throw new Error("User not found");
    }
    const user = result[0][0];
    console.log(user);

    const isPasswrodValid = await pwdUtils.comparePassword(
      password,
      user.password
    );
    if (!isPasswrodValid) {
      throw new Error("Invalid password");
    }

    const userRoles = await authRepository.getUserRoles(user.user_id);

    const token = authMiddleware.generateToken(user);
    return { user, token, userRoles };
  } catch (error) {
    console.error({ error: error.message });
  }
};

module.exports = {
  signUp,
  login,
};
