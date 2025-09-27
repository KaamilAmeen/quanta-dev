const bcrypt = require("bcrypt");

const comparePassword = async (password, hashedPassword) => {
  if (!password || !hashedPassword) {
    throw new Error("Password and hashedPassword are required");
  }
  try {
    return bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error({ error: error.message });
    throw new Error("Error comparing passwords");
  }
};

module.exports = {
  comparePassword,
};
