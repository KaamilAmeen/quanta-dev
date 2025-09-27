const authRepository = require("../repositories/authRepository");

// Service function to handle user sign up
const signUp = async (username, email, password) => {
  try {
    const result = await authRepository.signUp(username, email, password);
    return result;
  } catch (err) {
    console.error({ error: err.message });
  }
};

module.exports = {
    signUp
}