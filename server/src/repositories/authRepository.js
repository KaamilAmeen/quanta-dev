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

const getUserByEmail = async (email) => {
  try {
    const query = "CALL getUserByEmail(?);";
    const rows = await pool.query(query, [email]);
    return rows;
  } catch (error) {
    console.error({ error: error.message });
  }
}

const getUserRoles = async (userId) => {
  try {
    const query = "CALL getUserRoles(?);";
    const [rows] = await pool.query(query, [userId]);
    return rows;
  } catch (error) {
    console.log({error: error.message});
  }
}

module.exports = {
  signUp,
  getUserByEmail,
  getUserRoles
};
