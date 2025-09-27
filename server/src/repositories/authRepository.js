const pool = require("../config/dbConfig");
const bcrypt = require("bcrypt");

// Function to handle user sign up

const signUp = async (username, email, password) => {
  try {
    const query = "CALL SignUp(?, ?, ?);";
    const hashedPassword = await bcrypt.hash(password, 10);

    const rows = await pool.query(query, [username, email, hashedPassword]);
    return rows;
  } catch (error) {
    console.error({ error: error.message });
  }
};

module.exports = {
  signUp,
};
